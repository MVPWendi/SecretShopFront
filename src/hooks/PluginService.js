import api from "../Api";

 export default class PluginService {

    static async getAll()
    {
        const resp = await api.get('https://localhost:7289/api/api/plugins');
        return resp.data
    }
}