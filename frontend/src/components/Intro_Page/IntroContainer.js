import React from "react";

const IntroContainer = ({ children }) => {
    return (
        <div className="container-fluid">
            <div className="row no-gutter">
                <div className="col-md-7 d-none d-md-flex bg-image"></div>

                <div className="col-md-5 bg-light">
                    <div className="intro d-flex align-items-center py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 col-xl-7 mx-auto">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroContainer;
