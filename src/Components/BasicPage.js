import React from 'react';

// import mainPageData from '../Data/MainPageData';

const divStyle = {
    minHeight: "100vh",
    backgroundColor: 'rgb(135, 206, 250)',
    textAlign: "center",
}

const BasicPage = ({mainPageData}) => {
    return (
        <div style={divStyle}>
            {mainPageData.menuItems.map((item) => {
                return (
                    <section id={item}>
                        <div style={divStyle}>
                            <h1>{item}</h1>
                            <p>{mainPageData[item].content}</p>
                            <img src={mainPageData[item].image} alt={mainPageData[item].title} />
                        </div>
                    </section>
                )
            })}
        </div>
    );
};

export default BasicPage;
