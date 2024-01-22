import React from 'react';

import { navStyle, linkStyle } from './CSS/styles';
import mainPageData from '../Data/MainPageData';

const NavBar = ({mainPageData}) => {
    return (
        <nav style={navStyle}>
            <img height={50} src={mainPageData["Logo"]} alt="DataSC Logo" />
            {mainPageData.menuItems.map((item) => {
                return (
                    <a
                        style = {linkStyle}
                        href={"#" + item}
                    >
                        {item}
                    </a>
                    );
                })}
        </nav>
    );
};

export default NavBar;
