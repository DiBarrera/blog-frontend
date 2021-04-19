import React from "react";
import { Row, Col, Card, Button } from "antd";
import { Link } from "react-router-dom";
import nutritionHealth1 from "../../../assets/img/jpg/nutrition-healt-1.jpg";
import nutritionHealth2 from "../../../assets/img/jpg/nutrition-healt-2.jpg";
import nutritionHealth3 from "../../../assets/img/jpg/nutrition-healt-3.jpg";
import nutritionHealth4 from "../../../assets/img/jpg/nutrition-healt-4.jpg";
import nutritionHealth5 from "../../../assets/img/jpg/nutrition-healt-5.jpg";
import nutritionHealth6 from "../../../assets/img/jpg/nutrition-healt-6.jpg";

import "./TopicsOfInterest.scss";

export default function TopicsOfInterest() {

    return (
        <Row className="topics-of-interest">
            <h1>Topics of Interest</h1>
            <Col lg={24} className="topics-of-interest__title">
                <h2>Topics of Interest</h2>
            </Col>
            <Col lg={4} />
            <Col lg={6}>
                
            </Col>
            <Col lg={4} />
        </Row>
    )
}