import React from "react";
import { Row, Col, Card, Icon } from "antd";

import "./About.scss";

export default function About() {

    return (
        <Row className="about">
            <Col lg={24} className="about__title">
                <h2>Acerca de este sitio</h2>
                <h3>Sagittis aliquam malesuada bibendum arcu vitae elementum. 
                Ornare arcu dui vivamus arcu felis bibendum. 
                Risus nullam eget felis eget nunc lobortis mattis.</h3>
            </Col>
            <Col lg={4} />
            <Col lg={16}>
                <Row className="row-cards">
                    <Col md={8}>
                        Card . . .
                    </Col>
                </Row>
            </Col>
            <Col lg={4} />
        </Row>
    )
}

function CardInfo(props) {

    const { icon, title, subtitle } = props
    const { Meta } = Card
}