import React from 'react';
import { Row, Col } from "antd";
import { BookOutlined, InfoCircleOutlined, CopyrightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import "./NavigationFooter.scss";

export default function NavigationFooter() {
    return (
        <Row className="navigation-footer">
            <h1>NavigationFooter Row . . .</h1>
            <Col>
                <h3>Navigation Footer Col . . .</h3>
            </Col>
            <Col md={12}>
                List . . .
                <RenderListLeft />
            </Col>
            <Col md={12}>
                List . . .
                <RenderListRight />
            </Col>
        </Row>
    )
}

function RenderListLeft() {
    return (
        <ul>
            <li>
                <a href="/admin">
                    <BookOutlined /> Info List Left 1...
                </a>
            </li>
            <li>
                <Link to="/admin">
                    <InfoCircleOutlined /> Info List Left 2...
                </Link>
            </li>
            <li>
                <Link to="/admin">
                    <InfoCircleOutlined /> Info List Left 3...
                </Link>
            </li>
            <li>
                <Link to="/admin">
                    <CopyrightOutlined /> Info List Left 4...
                </Link>
            </li>
        </ul>
    )
}

function RenderListRight() {
    return (
        <ul>
            <li>
                <a href="/admin">
                    <BookOutlined /> Info List Right 1...
                </a>
            </li>
            <li>
                <Link to="/admin">
                    <InfoCircleOutlined /> Info List Right 2...
                </Link>
            </li>
            <li>
                <Link to="/admin">
                    <InfoCircleOutlined /> Info List Right 3...
                </Link>
            </li>
            <li>
                <Link to="/admin">
                    <CopyrightOutlined /> Info List Right 4...
                </Link>
            </li>
        </ul>
    )
}
