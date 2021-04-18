import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

import "./MenuTop.scss";

export default function MenuTop() {

    return (
        <Menu className="menu-top-web" mode="horizontal">
            <Menu.Item className="menu-top-web__logo">
                Logo...
            </Menu.Item>
            <Menu.Item className="menu-top-web__item">
                <Link to={"/"}>
                    Home...
                </Link>
            </Menu.Item>
            <Menu.Item className="menu-top-web__item">
                <Link to={"/contact"}>
                    Contacto...
                </Link>
            </Menu.Item>
            <div>
                Social Media...
            </div>
        </Menu>
    )

    // return (
    //     <>
    //     {/* Quitar los divs fragments <> </> y que el Div padre sea los <Menu></Menu> */}
    //         <h1>Abajo esta el MenuTop . . .</h1>
    //         <Menu className="menu-top" mode="horizontal">
    //             <Menu.Item className="menu-top__logo">
    //                 Logo...
    //             </Menu.Item>
    //             <Menu.Item className="menu-top__item">
    //                 <Link to={"/"}>
    //                     Home...
    //                 </Link>
    //             </Menu.Item>
    //             <Menu.Item className="menu-top__item">
    //                 <Link to={"/contact"}>
    //                     Contacto...
    //                 </Link>
    //             </Menu.Item>
    //             <div>
    //                 Social Media...
    //             </div>
    //         </Menu>
    //     </>
    // )
}