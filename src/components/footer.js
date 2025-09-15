import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "../CSS/footer.css";

export default function Footer() {
    return (
        <>
            <footer className="footer bg-dark text-white pt-5 pb-3">
                <Container>
                    <Row className="gy-4">
                        {/* Brand & HQ */}
                        <Col md={4} sm={12}>
                            <h5 className="mb-3">Al Basel Seafoods</h5>
                            <p>
                                At Al Basel Seafoods, we believe that great food begins with freshness and authenticity. Located in the heart of Saudi Arabia, we bring the ocean’s finest catch directly to your table, offering an unmatched seafood experience.
                            </p>
                        </Col>

                        {/* Our Locations */}
                        <Col md={2} sm={6}>
                            <h6 className="mb-3">Our Locations</h6>
                            <ul className="list-unstyled">
                                <li>Riyadh</li>
                                <li>Jeddah</li>
                                <li>Dammam</li>
                                <li>Khobar</li>
                                <li>Mecca</li>
                                <li>Medina</li>
                            </ul>
                        </Col>

                        {/* Contact Info */}
                        <Col md={3} sm={6}>
                            <h6 className="mb-3">Contact</h6>
                            <p>
                                📞 +966 1234 567 890 <br />
                                ✉️ info@albaselseafoods.com
                            </p>
                            <h6 className="mb-3">Address</h6>
                            <p>
                                📍 Riyadh, Saudi Arabia
                            </p>
                        </Col>

                        {/* Social Media */}
                        <Col md={3} sm={12} className="text-md-end text-center">
                            <h6 className="mb-3">Connect With Us</h6>
                            <div className="social-icons">
                                <a href="#"><FaFacebook /></a>
                                <a href="#"><FaInstagram /></a>
                                <a href="#"><FaYoutube /></a>
                            </div>
                        </Col>
                    </Row>

                    <hr className="border-secondary mt-4" />

                    {/* Bottom */}
                    <p className="text-center mb-0">
                        © 2025 Al Basel Seafoods. All rights reserved.
                    </p>
                </Container>
            </footer>
        </>

    );
}
