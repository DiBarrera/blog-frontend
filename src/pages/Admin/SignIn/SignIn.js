import React from "react";
import { Layout, Tabs } from "antd";
import {
    Switch,
    Route,
    Link,
    Redirect,
    BrowserRouter as Router
  } from "react-router-dom";
  import Logo from "../../../assets/img/png/logo-personal.png";

import "./SignIn.scss";

export default function SignIn() {

    const { Content } = Layout
    const { TabPane } = Tabs

    return (
        <Layout className="sign-in">
            <Content className="sign-in__content">
                <h1>Estamos en SignIn</h1>
                <h1 className="sign-in__content-logo">
                    <img src={Logo} alt="Logo" />
                </h1>
            </Content>  
        </Layout>
    )
}