import React from 'react';
import NavBar from '../Components/NavBar';
import BasicPage from '../Components/BasicPage';

import mainPageData from '../Data/MainPageData';


const divStyle = {
    minHeight: "100vh",
    backgroundColor: 'rgb(135, 206, 250)',
    textAlign: "center",
}

const headerStyle = {
    margin: "auto auto auto auto",
    height: "50px",
    backgroundColor: 'rgb(155, 226, 255)',
}


const MainPage = () => {
    return (
        // <div className="flex flex-col min-h-screen bg-blue-50 dark:bg-blue-900">
        <div style={divStyle}>
            {/* <header className="flex h-16 items-center justify-between px-4 md:px-6 bg-blue-100 dark:bg-blue-800"> */}
            <header style={headerStyle}>
                <NavBar mainPageData={mainPageData}/>
            </header>
            <main>
                <BasicPage mainPageData={mainPageData} />
            </main>
            <footer>
                {/* Footer content */}
            </footer>
        </div>
    );
};

export default MainPage;
