import React from 'react';
import { Row, Col, Card, Avatar } from "antd";
import AvatarTestimonial1 from "../../../assets/img/jpg/testimonial-1.jpg";
import AvatarTestimonial2 from "../../../assets/img/jpg/testimonial-2.jpg";
import AvatarTestimonial3 from "../../../assets/img/jpg/testimonial-3.jpg";

import "./Testimonials.scss";

export default function Testimonials() {
    return (
        <Row className="testimonials">
            <Row>
                <Col lg={4} />
                <Col lg={16} className="testimonials__title">
                    <h2>Testimonials Lorem ipsum dolor sit amet consectetur adipiscing elit duis.</h2>
                </Col>
                <Col lg={4} />
            </Row>
            <Row>
                <Col lg={4} />
                <Col lg={16}>
                    <Row className="row-cards">
                        <Col md={8}>
                            <CardReview />
                        </Col>
                    </Row>
                </Col>
                <Col lg={4} />
            </Row>
        </Row>
    )
}

function CardReview(props) {

    const { name, subtitle, avatar, review } = props
    const { Meta } = Card

    return (
        <Card className="testimonials__card">
            <p>{review}</p>
            <Meta 
                avatar={<Avatar src={avatar} />}
                title={name}
                description={subtitle}
            />
        </Card>
    )
}