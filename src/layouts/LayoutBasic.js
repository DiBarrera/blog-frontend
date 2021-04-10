import React from "react";
import {
    Switch,
    Route,
    Link,
    BrowserRouter as Router
  } from "react-router-dom";
import { Layout } from "antd";

import "./LayoutBasic.scss";

export default function LayoutBasic(props) {

    console.log(props)

    const { routes } = props

    console.log(routes)

    const { Content, Footer } = Layout

    return (
        <Layout>
            <h2>Menu Sider Basic</h2>
            <Layout>
                <Content>
                        <div>Content Abajo esta el Sistema de rutas Basic</div>
                        <LoadRoutes routes={routes} />
                </Content>
                <Footer>
                    <h5>Footer Basic</h5>
                </Footer>
            </Layout>
        </Layout>
    )
}

function LoadRoutes({ routes }) {
    
    console.log(routes)

    return routes.map((route, index) => (
        <Route 
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
        />
    ))
}