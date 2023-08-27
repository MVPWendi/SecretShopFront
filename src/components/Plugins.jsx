import React, {useState} from 'react';
import '../css/Plugin.css';
import Plugin from './Plugin';
import api from '../Api';
import { useEffect } from 'react';
import PluginService from '../hooks/PluginService';
import PluginModel from '../hooks/PluginModel.tsx';
function Plugins()
{
    const [plugins, setPlugins] = useState([]);
    async function fetch()
    {
        const pluginModel = await PluginModel.getAll();
        setPlugins(pluginModel.PluginSections);
    } 


    useEffect(() => {
            fetch();
            
    }, [])

    
    return(
        <div className="plugin-list">
        {plugins.map(section => (
        section.plugins.map(plugin=> (
            <Plugin key={plugin.id} plugin={plugin}></Plugin>
        ))
        ))}
        </div>
    )
}

export default Plugins;