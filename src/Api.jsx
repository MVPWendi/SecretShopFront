import axios from "axios"; 

const api = axios.create({
    withCredentials: true
});
api.interceptors.request.use(config => {
  const token = localStorage.getItem("token");

  if (token) {
    console.log("Ставлю токен:" + token);
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      
      originalRequest._retry = true;
      try {
        var AccessToken = localStorage.getItem("token");
        var RefreshToken = localStorage.getItem("refreshToken");
        const response = await axios.post("https://localhost:7289/api/token/refresh", {
            AccessToken,
            RefreshToken,
            withCredentials: true
        });
        
        console.log("DATA: " + response.data.token);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("refreshToken", response.data.refreshtoken);
        api.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;
        return api(originalRequest);
        
      } catch (_error) {
        
        localStorage.removeItem("token"); 
        console.log("REDIRECT TO LOGIN");
        return;
      }

    }
    return Promise.reject(error);
  }  
);

export default api;