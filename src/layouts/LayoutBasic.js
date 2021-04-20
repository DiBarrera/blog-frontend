import React from "react";
import {
    Switch,
    Route,
    // Link,
    // BrowserRouter as Router
  } from "react-router-dom";
import { /* Layout, */ Row, Col } from "antd";
import MenuTop from "../components/Web/MenuTop";
import Footer from "../components/Web/Footer";

import "./LayoutBasic.scss";

export default function LayoutBasic(props) {

    console.log(props)

    const { routes } = props

    console.log(routes)

    // const { /*Content,*/ Footer } = Layout

    return (
        // <Row>
        //     <Layout>
        //         <h2>Menu Sider Basic</h2>
        //         <Layout>
                        <>
                            <Row>
                                {/* <Layout>
                                    <Content> */}
                                        <Col md={4} />
                                        <Col md={16}>
                                            {/* <Content> */}
                                                <p>MenuTop</p>
                                                <div>Abajo esta MenuTop</div>
                                                <MenuTop />
                                                <div>Content Abajo esta el Sistema de rutas Basic</div>
                                                {/* <LoadRoutes routes={routes} />
                                                <Footer>
                                                    <h5>Footer Basic</h5>
                                                </Footer> */}
                                            {/* </Content> */}
                                        </Col>
                                        <Col md={4} />
                                    {/* </Content>
                                </Layout> */}
                            </Row>
                            <LoadRoutes routes={routes} />
                            {/* <Footer>
                                <h5>Footer Basic</h5>
                            </Footer> */}
                            <Footer />
                        </>
        //         </Layout>
        //     </Layout>
        // </Row>
    )

    // return (
    //     // <Row>
    //     //     <Layout>
    //     //         <h2>Menu Sider Basic</h2>
    //     //         <Layout>
    //                     <Row>
    //                         {/* <Layout>
    //                             <Content> */}
    //                                 <Col md={4} />
    //                                 <Col md={16}>
    //                                     {/* <Content> */}
    //                                         <p>MenuTop</p>
    //                                         <div>Abajo esta MenuTop</div>
    //                                         <MenuTop />
    //                                         <div>Content Abajo esta el Sistema de rutas Basic</div>
    //                                         <LoadRoutes routes={routes} />
    //                                         <Footer>
    //                                             <h5>Footer Basic</h5>
    //                                         </Footer>
    //                                     {/* </Content> */}
    //                                 </Col>
    //                                 <Col md={4} />
    //                             {/* </Content>
    //                         </Layout> */}
    //                     </Row>
    //     //         </Layout>
    //     //     </Layout>
    //     // </Row>
    // )

    // return (
    //     <Layout>
    //         <h2>Menu Sider Basic</h2>
    //         <Layout>
    //             <Content>
    //                     <div>Content Abajo esta el Sistema de rutas Basic</div>
    //                     <LoadRoutes routes={routes} />
    //             </Content>
    //             <Footer>
    //                 <h5>Footer Basic</h5>
    //             </Footer>
    //         </Layout>
    //     </Layout>
    // )
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