import React from 'react';
import { Layout, Row, Col } from "antd";

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
                            Footer Info 1
                        </Col>
                        <Col md={8}>
                            Footer Info 2
                        </Col>
                        <Col md={8}>
                            Footer Info 3
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
