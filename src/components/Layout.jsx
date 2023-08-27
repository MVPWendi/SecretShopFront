import React, {useState} from 'react';
import '../css/Main.css';
import Navbar from './Navbar';

function Layout({children})
{
    const [name, setName] = useState('');
    return(
        <div className='main'>
        <Navbar></Navbar>  
        <div className='body'>
            {children}
        </div>
        </div>           
    )
}

export default Layout;