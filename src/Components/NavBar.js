import React from 'react';


const navStyle = {
    
    padding: "1.5vh 2vw",
    margin: "auto auto auto auto",
    justifyContent: "center",    
}

const linkStyle = {
    padding: "0vh 2vw",
    textDecoration: "none",
    color: "black",
    fontSize: "large",
    fontWeight: "bold",
}


const NavBar = ({mainPageData}) => {
    return (
        <nav style={navStyle}>
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
