import React from 'react';

import { navStyle, linkStyle } from './CSS/styles';

const NavBar = ({mainPageData}) => {
    return (
        <nav style={navStyle}>
            <img height={50} src={mainPageData["Logo"]} alt="DataSC Logo" />
            {mainPageData.menu.map((item) => {
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
