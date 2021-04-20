import React from "react";
import { Row, Col, Card } from "antd";
import { 
    ExclamationCircleOutlined,
    ClockCircleOutlined,
    FileOutlined,
    UsergroupAddOutlined,
    DollarOutlined,
    CheckCircleOutlined
} from "@ant-design/icons";

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
                        <CardInfo 
                            avatar={<ExclamationCircleOutlined />}
                            title="About 1"
                            description="Enim eu turpis egestas pretium aenean pharetra magna ac. 
                            Id eu nisl nunc mi ipsum faucibus vitae aliquet nec."
                        />
                    </Col>
                    <Col md={8}>
                        Card . . .
                        <CardInfo 
                            avatar={<ClockCircleOutlined />}
                            title="About 2"
                            description="Enim eu turpis egestas pretium aenean pharetra magna ac. 
                            Id eu nisl nunc mi ipsum faucibus vitae aliquet nec."
                        />
                    </Col>
                    <Col md={8}>
                        Card . . .
                        <CardInfo 
                            avatar={<FileOutlined />}
                            title="About 3"
                            description="Enim eu turpis egestas pretium aenean pharetra magna ac. 
                            Id eu nisl nunc mi ipsum faucibus vitae aliquet nec. "
                        />
                    </Col>
                    <Col md={8}>
                        Card . . .
                        <CardInfo 
                            avatar={<UsergroupAddOutlined />}
                            title="About 4"
                            description="Enim eu turpis egestas pretium aenean pharetra magna ac. 
                            Id eu nisl nunc mi ipsum faucibus vitae aliquet nec."
                        />
                    </Col>
                    <Col md={8}>
                        Card . . .
                        <CardInfo 
                            avatar={<DollarOutlined />}
                            title="About 5"
                            description="Enim eu turpis egestas pretium aenean pharetra magna ac. 
                            Id eu nisl nunc mi ipsum faucibus vitae aliquet nec."
                        />
                    </Col>
                    <Col md={8}>
                        Card . . .
                        <CardInfo 
                            avatar={<CheckCircleOutlined />}
                            title="About 6"
                            description="Enim eu turpis egestas pretium aenean pharetra magna ac. 
                            Id eu nisl nunc mi ipsum faucibus vitae aliquet nec."
                        />
                    </Col>
                </Row>
            </Col>
            <Col lg={4} />
        </Row>
    )
}

function CardInfo(props) {

    const { avatar, title, description } = props
    const { Meta } = Card

    return (
        <Card className="about__card">
            <Meta avatar={avatar} />
            <Meta title={title} description={description} />
        </Card>
    )
}