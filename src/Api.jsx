
// Interceptors
import axios from "axios"; 

// Interceptor for adding AcessToken to every request
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


// Interceptor for updating AccessToken and Redirect if token to old
api.interceptors.response.use(
  
  response => response,
  async error => {
    const originalRequest = error.config;
    console.log(error);
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
        localStorage.setItem("name", response.data.name)
        api.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;
        return api(originalRequest);
        
      } catch (_error) {
        localStorage.removeItem("token");
        return window.location.href = '/login';
      }
    }
    if(error.response.status!=400)
    {
    return Promise.reject(error);
    }
  } 
);

export default api;