import React from 'react';
import { Row, Col, Card, Avatar } from "antd";
import AvatarTestimonial1 from "../../../assets/img/jpg/testimonial-1.jpg";
import AvatarTestimonial2 from "../../../assets/img/jpg/testimonial-2.jpg";
import AvatarTestimonial3 from "../../../assets/img/jpg/testimonial-3.jpg";
import AvatarTestimonial4 from "../../../assets/img/jpg/testimonial-4.jpg";
import AvatarTestimonial5 from "../../../assets/img/jpg/testimonial-5.jpg";
import AvatarTestimonial6 from "../../../assets/img/jpg/testimonial-6.jpg";

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
                            <CardReview 
                                name="Person 1"
                                subtitle="Person's job name 1"
                                avatar={AvatarTestimonial1}
                                review="Urna id volutpat lacus laoreet non curabitur gravida arcu."
                            />
                        </Col>
                        <Col md={8}>
                            <CardReview 
                                name="Person 2"
                                subtitle="Person's job name 2"
                                avatar={AvatarTestimonial2}
                                review="Urna id volutpat lacus laoreet non curabitur gravida arcu."
                            />
                        </Col>
                        <Col md={8}>
                            <CardReview 
                                name="Person 3"
                                subtitle="Person's job name 3"
                                avatar={AvatarTestimonial3}
                                review="Urna id volutpat lacus laoreet non curabitur gravida arcu."
                            />
                        </Col>
                    </Row>
                    <Row className="row-cards">
                        <Col md={8}>
                            <CardReview 
                                name="Person 4"
                                subtitle="Person's job name 4"
                                avatar={AvatarTestimonial4}
                                review="Urna id volutpat lacus laoreet non curabitur gravida arcu."
                            />
                        </Col>
                        <Col md={8}>
                            <CardReview 
                                name="Person 5"
                                subtitle="Person's job name 5"
                                avatar={AvatarTestimonial5}
                                review="Urna id volutpat lacus laoreet non curabitur gravida arcu."
                            />
                        </Col>
                        <Col md={8}>
                            <CardReview 
                                name="Person 6"
                                subtitle="Person's job name 6"
                                avatar={AvatarTestimonial6}
                                review="Urna id volutpat lacus laoreet non curabitur gravida arcu."
                            />
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