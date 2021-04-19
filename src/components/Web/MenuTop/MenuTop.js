import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import logoWhite from "../../../assets/img/png/logo-personal.png";
import { getMenuApi } from "../../../api/menu";
import SocialLinks from "../SocialLinks";

import "./MenuTop.scss";

export default function MenuTop() {

    const [menuData, setMenuData] = useState([])

    console.log(menuData)

    useEffect(() => {
        getMenuApi()
            .then(response => {
                console.log(response)
                const arrayMenu = []
                response.menu.forEach(item => {
                    if(item.active) {
                        console.log("Enviando Menús a TopMenu")
                        arrayMenu.push(item)
                    }
                    // item.active && arrayMenu.push(item)
                })
                setMenuData(arrayMenu)
            })
    }, [])

    console.log(menuData)

    return (
        <Menu className="menu-top-web" mode="horizontal">
            <Menu.Item className="menu-top-web__logo">
                <Link to={"/"}>
                    <img src={logoWhite} alt="Logo" />
                </Link>
            </Menu.Item>

            {menuData.map(item => {
                const external = item.url.indexOf("http") > -1 ? true : false
                if(external) {
                    return (
                        <Menu.Item key={item._id} className="menu-top-web__item">
                            <a href={item.url} target="_blank" rel="noopener noreferrer">
                                {item.title}
                            </a>
                        </Menu.Item>
                    )
                }

                return (
                    <Menu.Item key={item._id} className="menu-top-web__item">
                        <Link to={item.url}>
                            {item.title}
                        </Link>
                    </Menu.Item>
                )
            })}
            {/* <Menu.Item className="menu-top-web__item">
                <Link to={"/"}>
                    Home...
                </Link>
            </Menu.Item>
            <Menu.Item className="menu-top-web__item">
                <Link to={"/contact"}>
                    Contacto...
                </Link>
            </Menu.Item> */}
            <SocialLinks />
            {/* <div>
                Social Media...
            </div> */}
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