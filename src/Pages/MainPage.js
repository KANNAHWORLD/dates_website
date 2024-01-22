import React from 'react';
import NavBar from '../Components/NavBar';
import BasicPage from '../Components/BasicPage';

import mainPageData from '../Data/MainPageData';
import { headerStyle, divStyle, buttonStyle, page_container } from '../Components/CSS/styles';
import EventCard from '../Components/DisplayCard';

const MainPage = () => {
    return (
        <div style={divStyle}>
            <header id="Header" style={headerStyle}>
                <NavBar mainPageData={mainPageData}/>
            </header>
            <main style={page_container}>
                <BasicPage mainPageData={mainPageData} />
                {/* the sectionID of the EventCard must also be in the menuitems  */}
                <EventCard eventsJson={mainPageData["Events"]} sectionID="Events"/>
                <a href="#Header" style={buttonStyle}>Back to Top</a>
            </main>
            <footer>
                {/* Footer content */}
            </footer>
        </div>
    );
};

export default MainPage;
