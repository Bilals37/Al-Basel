import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Location from "./location";
import "../CSS/aboutus.css";

export default function About() {
    const [counters, setCounters] = useState({
        customers: 0,
        menuItems: 0,
        experience: 0,
        customer_repeat: 0,
    });

    // Animate counters
    useEffect(() => {
        const interval = setInterval(() => {
            setCounters((prev) => {
                let updated = { ...prev };
                if (prev.customers < 5000) updated.customers = prev.customers + 50;
                if (prev.menuItems < 120) updated.menuItems = prev.menuItems + 2;
                if (prev.experience < 15) updated.experience = prev.experience + 1;
                if (prev.customer_repeat < 96) updated.customer_repeat = prev.customer_repeat + 1;
                return updated;
            });
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <section id="about" className="py-5 bg-light">
                <Container className="aboutus">
                    <Row className="align-items-center">
                        {/* Left Column - Text + Counters */}
                        <Col md={6}>
                            <h2 className="mb-4">About Us</h2>
                            <p className="details">
                                At <b>Al Basel Seafoods</b>, we believe that great food begins with freshness and authenticity. Located in the heart of Saudi Arabia, we bring the ocean’s finest catch directly to your table, offering an unmatched seafood experience. Every dish we serve is carefully crafted by our expert chefs, blending traditional recipes with modern flavors to create meals that delight every palate.

                                From succulent prawns and grilled fish to signature seafood platters, our menu is designed to satisfy both families and seafood enthusiasts.
                            </p>

                            {/* Counters */}
                            <Row className="mt-4 text-center">
                                <Col className="counter-box">
                                    <h3>{counters.customers}+</h3>
                                    <p>Customers Served</p>
                                </Col>
                                <Col className="counter-box">
                                    <h3>{counters.menuItems}+</h3>
                                    <p>Menu Items</p>
                                </Col>
                                <Col className="counter-box">
                                    <h3>{counters.experience}+</h3>
                                    <p>Years Experience</p>
                                </Col>
                                {/* <Col className="counter-box">
                                <h3>{counters.customer_repeat}%</h3>
                                <p>Repeat Customers</p>
                            </Col> */}
                            </Row>

                        </Col>

                        {/* Right Column - Images + Badge */}
                        <Col md={6} className="position-relative about-images">
                            {/* Large main image */}
                            <img
                                src="https://images.unsplash.com/photo-1552566626-52f8b828add9"
                                alt="Restaurant Interior"
                                className="main-img"
                            />

                            {/* Small overlapping image */}
                            <img
                                src="https://images.unsplash.com/photo-1525755662778-989d0524087e"
                                alt="Dining Experience"
                                className="small-img"
                            />

                            {/* Stats Badge */}
                            <div className="stats-badge">
                                <span className="stat-number">
                                    {counters.customer_repeat}%
                                </span>
                                <span className="stat-text">
                                    Repeat <br />  Customers
                                </span>
                            </div>

                            {/* Circular Contact Button */}
                            <div className="contact-circle">
                                <a href="#contact">Contact Us</a>
                            </div>
                        </Col>
                    </Row>
                    <Location />
                </Container>
            </section>
        </>

    );
}
