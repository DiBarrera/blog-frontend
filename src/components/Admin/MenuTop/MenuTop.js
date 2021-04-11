import React from "react";
import Logo from "../../../assets/img/png/logo-personal.png";
import { Button } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined, PoweroffOutlined } from "@ant-design/icons";

import "./MenuTop.scss";

export default function MenuTop() {

    return (
        <div className="menu-top">
            <div className="menu-top__left">
                <img 
                    className="menu-top__left-logo"
                    src={Logo}
                    alt="Logo"
                />
                <Button type="link" onClick={() => console.log("Click")}>
                    <MenuUnfoldOutlined />
                </Button>
            </div>
            <div className="menu-top__right">
                <Button type="link" onClick={() => console.log("Desconexion.")}>
                    <PoweroffOutlined />
                </Button>
            </div>
        </div>
    )
}