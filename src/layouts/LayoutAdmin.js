import React, { useState } from "react";
import {
    Switch,
    Route,
    Link,
    Redirect,
    BrowserRouter as Router
  } from "react-router-dom";
import { Layout } from "antd";
import MenuTop from "../components/Admin/MenuTop";
import MenuSider from "../components/Admin/MenuSider";

import "./LayoutAdmin.scss"
import routes from "../config/routes";

export default function LayoutAdmin(props) {

    console.log(props)

    const { routes } = props

    console.log(routes)

    const { Header, Content, Footer } = Layout
    const [menuCollapsed, setMenuCollapsed] = useState(false)

    return (
        <Layout>
            {/* TO DO: Menu Sider */}
            <MenuSider menuCollapsed={menuCollapsed}/>

            <Layout className="layout-admin"
            style={{ marginLeft: menuCollapsed ? "80px" : "200px" }}>
                <Header className="layout-admin__header">
                    {/* TO DO: Menu Top */}
                    <MenuTop 
                        menuCollapsed={menuCollapsed}
                        setMenuCollapsed={setMenuCollapsed}
                    />
                    Header tres puntos ...
                </Header>
                <Content className="layout-admin__content">
                    <div>Content Abajo esta el Sistema de rutas Admin</div>
                    <LoadRoutes routes={routes} />
                    <div>Contenido tres puntos ...</div>
                </Content>
                <Footer className="layout-admin__footer">
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