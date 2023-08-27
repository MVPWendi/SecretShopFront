import React, {useState} from 'react';
import '../css/Plugin.css';


function Plugin(props)
{
    console.log(props.plugin.PathToImage);
    return(
        <a className="plugin" href='#'>  
            <img className='plugin-image' src={props.plugin.PathToImage}></img>
            <div className='plugin-card'>
                <h1>{props.plugin.Name}</h1>
                <p>{props.plugin.description}</p>
                <div className='plugin-card-info'>{props.plugin.Price} RUB {props.plugin.Rating}/5 {props.plugin.Category}</div>
            </div>
        </a>
    )
}

export default Plugin;