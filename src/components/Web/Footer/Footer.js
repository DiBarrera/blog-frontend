import React from 'react';
import { Layout, Row, Col } from "antd";
import FooterInfo from "./FooterInfo";
import NavigationFooter from "./NavigationFooter";
import Newsletter from "../Newsletter";

import "./Footer.scss";

export default function Footer() {

    const { Footer } = Layout

    return (
        <Footer className="footer">
            <Row>
                <Col md={4} />
                <Col md={16}>
                    <Row>
                        <Col md={8}>
                            <FooterInfo />
                        </Col>
                        <Col md={8}>
                            <NavigationFooter />
                        </Col>
                        <Col md={8}>
                            <Newsletter />
                        </Col>
                    </Row>
                    <Row className="footer__copyright">
                        <Col md={12}>
                            © 2021 ALL RIGHTS RESERVED
                        </Col>
                        <Col md={12}>
                            Owner's Personal Web Page
                        </Col>
                    </Row>
                </Col>
                <Col md={4} />
            </Row>
        </Footer>
    )
}
