import React from 'react';
import { divStyle, divSection, paragraphStyle, headerStyle, titleStyle } from './CSS/styles';





const BasicPage = ({mainPageData}) => {
    var side = 0;
    return (
        <div style={divStyle}>
            {mainPageData.menuItems.map((item) => {
                return (
                    <section id={item}>
                        <h1 style={titleStyle}>{item}</h1>
                        <div style={divSection}>
                            {(side++%2 == 0) ?
                                (
                                    <>
                                    <p style={paragraphStyle}>{mainPageData[item].content}</p>
                                    <img src={mainPageData[item].image} alt={mainPageData[item].title} />
                                    </>
                                ):(
                                    <>
                                    <img src={mainPageData[item].image} alt={mainPageData[item].title} />
                                    <p style={paragraphStyle}>{mainPageData[item].content}</p>
                                    </>
                                )
                            }
                        </div>
                    </section>
                )
            })}
        </div>
    );
};

export default BasicPage;
