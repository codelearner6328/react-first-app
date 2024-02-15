import React, { useState } from 'react'

import '../customStyle.css';

export default function About() {

    const [myStyle, setMyStyle] = useState({
        color: "white",
        backgroundColor: "black",
    })

    const toggleStyle = () => {
        if (myStyle.color === "white") {
            setMyStyle({
                color: "black",
                backgroundColor: "white",
            });
            setBtnText("Enable Dark Mode");
        } else {
            setMyStyle({
                color: "white",
                backgroundColor: "black",
                border: "1px solid white",
            });
            setBtnText("Enable Light Mode");
        }
    }

    const [btnText, setBtnText] = useState('Enable Dark Mode');



    // zubair code start
    // const [darkMode, setDarkMode] = useState(false);
    // const toggleStyle = () => {
    //     setDarkMode(!darkMode);
    // }
    // zubair code end

    return (
        <>
            <div className='container' style={myStyle}>
                <h2>About Us</h2>
                <div className="accordion" id="accordionExample" style={myStyle}>
                    <div className="card">
                        <div className="card-header" id="headingOne" style={myStyle}>
                            <h2 className="mb-0">
                                <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                                    Collapsible Group Item #1
                                </button>
                            </h2>
                        </div>

                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="card-body" style={myStyle}>
                                Some placeholder content for the first accordion panel. This panel is shown by default, thanks to the <code>.show</code> className.
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingTwo" style={myStyle}>
                            <h2 className="mb-0">
                                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                                    Collapsible Group Item #2
                                </button>
                            </h2>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample" >
                            <div className="card-body" style={myStyle}>
                                Some placeholder content for the second accordion panel. This panel is hidden by default.
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingThree" style={myStyle}>
                            <h2 className="mb-0">
                                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                                    Collapsible Group Item #3
                                </button>
                            </h2>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                            <div className="card-body" style={myStyle}>
                                And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container my-2">
                    <button className="btn btn-primary" onClick={toggleStyle}>{btnText}</button>
                </div>
            </div>

            {/* <p className={darkMode ? "on" : "off"}>testing there</p>
            <button className="btn btn-primary" onClick={toggleStyle}>Enable Dark Mode</button> */}
        </>
    )
}
