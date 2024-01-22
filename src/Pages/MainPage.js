import React from 'react';
import NavBar from '../Components/NavBar';
import BasicPage from '../Components/BasicPage';

import mainPageData from '../Data/MainPageData';
import { headerStyle, divStyle, buttonStyle, page_container } from '../Components/CSS/styles';


const MainPage = () => {
    return (
        // <div className="flex flex-col min-h-screen bg-blue-50 dark:bg-blue-900">
        <div style={divStyle}>
            {/* <div> */}
            {/* <header className="flex h-16 items-center justify-between px-4 md:px-6 bg-blue-100 dark:bg-blue-800"> */}
            <header id="Header" style={headerStyle}>
                <NavBar mainPageData={mainPageData}/>
            </header>
            <main style={page_container}>
                <BasicPage mainPageData={mainPageData} />
                <a href="#Header" style={buttonStyle}>Back to Top</a>
            </main>
            <footer>
                {/* Footer content */}
            </footer>
        </div>
    );
};

export default MainPage;
