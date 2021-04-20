import React from 'react';
import logoWhite from "../../../../assets/img/png/logo-personal.png";
import SocialLink from "../../SocialLinks";

import "./FooterInfo.scss";

export default function FooterInfo() {
    return (
        <div className="footer-info">
            <h1>FooterInfo . . .</h1>
            <img src={logoWhite} alt="Logo" />
            <h4>Ullamcorper morbi tincidunt ornare massa eget. 
            Sit amet venenatis urna cursus eget nunc. 
            Cursus metus aliquam eleifend mi in nulla posuere sollicitudin.</h4>
            <SocialLink />
        </div>
    )
}
