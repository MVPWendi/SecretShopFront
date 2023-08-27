import React from "react";
import '../css/Plugin.css';
import Plugin from "../components/Plugin";
import Navbar from "../components/Navbar";
import '../css/Main.css';
import Layout from "../components/Layout";
import Plugins from "../components/Plugins";

function Main()
{
    return(
        <Layout>
            <Plugins items={[
                <Plugin></Plugin>,
                <Plugin></Plugin>,
                <Plugin></Plugin>,
                <Plugin></Plugin>,
                <Plugin></Plugin>,
                <Plugin></Plugin>,
                <Plugin></Plugin>
            ]}></Plugins>
        </Layout>       
    )
}

export default Main;