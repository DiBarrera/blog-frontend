import React from "react";
import {
    // Switch,
    // Route,
    Link,
    withRouter,
    // BrowserRouter as Router
  } from "react-router-dom";
import { Layout, Menu } from "antd";
import { HomeOutlined, MenuOutlined, UserOutlined } from "@ant-design/icons";

import "./MenuSider.scss";

// export default function MenuSider(props) {
function MenuSider(props) {

    console.log(props)

    const { Sider } = Layout
    const { menuCollapsed, location } = props

    console.log(location)
    console.log(location.pathname)

    return (
        <Sider className="admin-sider" collapsed={menuCollapsed}>
            <Menu 
                theme="dark" 
                mode="inline" 
                defaultSelectedKeys={[location.pathname]}
            >
                <Menu.Item key="/admin">
                    <Link to={"/admin"}>
                        <HomeOutlined />
                        <span className="nav-text">Home</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="/admin/users">
                    <Link to={"/admin/users"}>
                        <UserOutlined />
                        <span className="nav-text">Usuarios</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="/admin/menu">
                    <Link to={"/admin/menu"}>
                        <MenuOutlined />
                        <span className="nav-text">Menu Web</span>
                    </Link>
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

export default withRouter(MenuSider)