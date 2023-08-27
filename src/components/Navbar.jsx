import React, {useState} from 'react';
import '../css/Main.css';


function Navbar()
{
    const [name, setName] = useState('');
    return(
        <div className="navbar">  
        <div className='navbar-left'>
            <div className='navbar-button'>WENDI <br></br> PLUGINS</div>    
            <a className='navbar-button'>ПЛАГИНЫ</a>   
        </div>             
        <div className='navbar-right'>
            <a className='navbar-button navbar-button-wiki'>WIKI</a>    
            <a className='navbar-button'>О НАС</a>
            <a className='navbar-button'>ПРОФИЛЬ</a>  
            <a className='navbar-button navbar-button-signin'>ВХОД <br></br> РЕГИСТРАЦИЯ</a>   
        </div>    
        </div>          
    )
}

export default Navbar;