import React from "react";
const Main = () => {
    return (
        <>
            <div className="container">
                <div className="main">
                    <div className="main_heading">
                        <h1 className="main_heading1">
                            We&apos;re passionate about helping
                            <span>business succeed</span> online
                        </h1>
                        <p className="main_heading2">
                            Lucky for you, <span>digital marketing</span> is our
                            forte.
                        </p>
                    </div>
                    <div>
                        <img src="/main/image.svg" alt="image" />
                    </div>
                </div>
            </div>
            <div className="main-image">
                <div className="silder">
                    <div className="slides">
                        <div className="slide">
                            <img
                                src="/main/Google_certificate.svg"
                                alt="Google_certificate"
                            />
                        </div>

                        <div className="slide">
                            <img
                                src="/main/hubspot_certificate.svg"
                                alt="hunspot_certificate"
                            />
                        </div>

                        <div className="slide">
                            <img
                                src="/main/Yext_certificate.svg"
                                alt="Yext_certificate"
                            />
                        </div>
                        <div className="slide">
                            <img
                                src="/main/Google_certificate.svg"
                                alt="Google_certificate"
                            />
                        </div>

                        <div className="slide">
                            <img
                                src="/main/hubspot_certificate.svg"
                                alt="hunspot_certificate"
                            />
                        </div>

                        <div className="slide">
                            <img
                                src="/main/Yext_certificate.svg"
                                alt="Yext_certificate"
                            />
                        </div>
                    </div>
                    <div className="container main-image__text">
                        <p>Yes, we&apos;re certified</p>
                    </div>
                </div>
                <div className="main-image_line"></div>
            </div>
        </>
    );
};

export default Main;
