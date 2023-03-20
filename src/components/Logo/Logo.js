import './Logo.scss';
import React from "react";
import dollyLogo from '../../img/dolly-logo.png'


const Logo = () => {
    return (
        <div className="cont-logo-header">
            <img className="img-logo-header" src={ dollyLogo } alt=""></img>
        </div>
    )
};

export default Logo;