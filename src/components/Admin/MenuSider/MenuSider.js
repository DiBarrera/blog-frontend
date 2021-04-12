import React from "react";
import {
    Switch,
    Route,
    Link,
    BrowserRouter as Router
  } from "react-router-dom";
import { Layout, Menu } from "antd";
import { HomeOutlined, MenuOutlined, UserOutlined } from "@ant-design/icons";

import "./MenuSider.scss";

export default function MenuSider(props) {

    console.log(props)

    const { Sider } = Layout
    const { menuCollapsed } = props

    return (
        <Sider className="admin-sider" collapsed={menuCollapsed}>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                <Menu.Item key="1">
                    <Link to={"/admin"}>
                        <HomeOutlined />
                        <span className="nav-text">Home</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to={"/admin/users"}>
                        {/* <MenuOutlined /> */}
                        <UserOutlined />
                        <span className="nav-text">Usuarios</span>
                    </Link>
                </Menu.Item>
            </Menu>
        </Sider>
    )
}