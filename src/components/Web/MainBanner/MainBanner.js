import React from "react";
import { Row, Col } from "antd";

import "./MainBanner.scss";

export default function MainBanner() {

    return (
        <div className="main-banner">
            <div className="main-banner__dark" />
            <Row>
                <Col lg={4} />
                <Col lg={16}>
                    <h2>
                        Información Importante<br /> Más sobre información importante aquí
                    </h2>
                    <h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
                        Urna cursus eget nunc scelerisque viverra.
                    </h3>
                </Col>
                <Col lg={4} />
            </Row>
        </div>
    )
}