import React from "react";

const IntroTitle = ({ title, subtitle }) => {
    return (
        <div>
            <h3 className="display-4">{title}</h3>
            <p className="text-muted mb-4">{subtitle}</p>
        </div>
    );
};

export default IntroTitle;
