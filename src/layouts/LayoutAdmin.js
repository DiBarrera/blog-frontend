import React from "react";
import {
    Switch,
    Route,
    Link,
    Redirect,
    BrowserRouter as Router
  } from "react-router-dom";
import { Layout } from "antd";

import "./LayoutAdmin.scss"
import routes from "../config/routes";

export default function LayoutAdmin(props) {

    console.log(props)

    const { routes } = props

    console.log(routes)

    const { Header, Content, Footer } = Layout

    return (
        <Layout>
            <h2>Menu Sider Admin</h2>
            <Layout>
                <Header>
                    Header tres puntos ...
                </Header>
                <Content>
                    <div>Content Abajo esta el Sistema de rutas Admin</div>
                    <LoadRoutes routes={routes} />
                    <div>Contenido tres puntos ...</div>
                </Content>
                <Footer>
                    <div>Footer tres puntos ...</div>
                </Footer>
            </Layout>
        </Layout>
    )
}

function LoadRoutes({ routes }) {

    console.log(routes)

    return (
        <Switch>
            {routes.map((route, index) => (
                <Route 
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                />
            ))
        }
        </Switch>
    )
}