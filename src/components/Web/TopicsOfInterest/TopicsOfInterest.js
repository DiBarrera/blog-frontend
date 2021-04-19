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
            <Col lg={16}>
                <Row className="row-topics-of-interest">
                    <Col md={6}>
                        Topic 1...
                        <CardTopics 
                            image={nutritionHealth1}
                            title="Nutrition Health 1"
                            subtitle="info about nutrition and health 1"
                            link="http://localhost:3000/#"
                        />
                    </Col>
                    <Col md={6}>
                        Topic 2...
                        <CardTopics 
                            image={nutritionHealth2}
                            title="Nutrition Health 2"
                            subtitle="info about nutrition and health 2"
                            link="http://localhost:3000/#"
                        />
                    </Col>
                    <Col md={6}>
                        Topic 3...
                        <CardTopics 
                            image={nutritionHealth3}
                            title="Nutrition Health 3"
                            subtitle="info about nutrition and health 3"
                            link="http://localhost:3000/#"
                        />
                    </Col>
                    <Col md={6}>
                        Topic 4...
                        <CardTopics 
                            image={nutritionHealth4}
                            title="Nutrition Health 4"
                            subtitle="info about nutrition and health 4"
                            link="http://localhost:3000/#"
                        />
                    </Col>
                </Row>
                <Row className="row-topics-of-interest">
                    <Col md={6}>
                        <CardTopics 
                            image={nutritionHealth5}
                            title="Nutrition Health 5"
                            subtitle="Info about nutrition and health 5"
                            link="http://localhost:3000/#"
                        />
                    </Col>
                    <Col md={6} />
                    <Col md={6} />
                    <Col md={6}>
                        <CardTopics 
                            image={nutritionHealth6}
                            title="Nutrition Health 6"
                            subtitle="Info about nutrition and health 6"
                            link="http://localhost:3000/#"
                        />
                    </Col>
                </Row>
            </Col>
            <Col lg={4} />
            <Col lg={24} className="topics-of-interest__more">
                <Link to="/topics">
                    <Button>
                        Ver más Topics
                    </Button>
                </Link>
            </Col>
        </Row>
    )
}

function CardTopics(props) {

    const { image, title, subtitle, link } = props
    const { Meta } = Card

    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <Card
                className="topics-of-interest__card"
                cover={<img src={image} alt={title} />}
                actions={[<Button>Saber más</Button>]}
            >
                CardTopics . . .
                <Meta title={title} description={subtitle} />
            </Card>
        </a>
    )
}