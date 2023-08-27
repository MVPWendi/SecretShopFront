import { json } from "stream/consumers";
import api from "../Api";

interface Plugin {
    id: number;
    name: string;
    price: number;
    pathToFile: string;
    pathToImage: string;
    category: string;
    author: string; 
    rating: number;
    releaseDate: string; 
  }
  interface PluginSections{
    categoryName: string;
    plugins: Plugin[];
  }
 export default class PluginModel {

    PluginSections: PluginSections[]
    constructor(data: any) {
        this.PluginSections = Object.keys(data).map(name => {
          return {
            categoryName: name,
            plugins: data[name].Plugins  
          };
        });

        console.log(this.PluginSections);
      }
    static async getAll()
    {
        const resp = await api.get('https://localhost:7289/api/api/plugins');
        return new PluginModel(resp.data)
    }
}

