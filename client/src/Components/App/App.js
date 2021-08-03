import React from "react";
import RouterNavigation from "../RouterNavigation/RouterNavigation";
import Header from "../Header/Header";

function App() {

    return (<>
        <Header/>
        <h1 className={'bg-black'}>Hi, {process.env.MSG} !!</h1>
        <RouterNavigation/>
    </>);

}

export default App;
