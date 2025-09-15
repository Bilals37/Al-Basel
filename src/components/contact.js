import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa"; // ✅ import icons
import "../CSS/contactus.css"; // custom styles

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, phone, message } = formData;
        const phoneNumber = "966123456789"; // Replace with your WhatsApp number
        const text = `Hello, my name is ${name}.
Email: ${email}
Phone: ${phone}
Message: ${message}`;

        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");
    };

    return (
        <>
            <section id="contact" className="py-5 bg-light">
                <Container>


                    <Card className="p-4 shadow-lg border-0 rounded-4">
                        <h2 className="text-center mb-5">Contact Us</h2>
                        <Row>
                            {/* Left: Contact Form */}
                            <Col
                                md={6}
                                className="border-end pe-4 mb-4 mb-md-0" // ✅ remove border on small screens
                            >
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group controlId="formName" className="mb-3">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            placeholder="Enter your name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formEmail" className="mb-3">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formPhone" className="mb-3">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control
                                            type="tel"
                                            name="phone"
                                            placeholder="Enter your phone number"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formMessage" className="mb-3">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            name="message"
                                            rows={4}
                                            placeholder="Type your message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>

                                    <Button variant="danger" type="submit" className="w-100">
                                        Send via WhatsApp
                                    </Button>
                                </Form>
                            </Col>

                            {/* Right: Contact Details */}
                            <Col md={6} className="ps-4 d-flex flex-column justify-content-center">
                                <div>
                                    <h4>Headquarters</h4>
                                    <p>📍 Riyadh, Saudi Arabia</p>

                                    <h5>Our Locations</h5>
                                    <ul className="location">
                                        <li>Jeddah | Dammam | Mecca | Medina | Khobar | Tabuk</li>
                                    </ul>

                                    <h5>Contact Information</h5>
                                    <p>📞 +966 123 456 789</p>
                                    <p>📱 +966 555 444 333</p>
                                    <p>✉️ info@albaselseafoods.com</p>

                                    <h5>Operating Hours</h5>
                                    <p>Mon - Sat: 9:00 AM - 10:00 PM</p>
                                    <p>Sunday: Closed</p>

                                    <h5>Connect With Us</h5>
                                    <div className="social-icons d-flex gap-3 mt-2">
                                        <a
                                            href="https://instagram.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaInstagram size={28} className="text-danger" />
                                        </a>
                                        <a
                                            href="https://facebook.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaFacebook size={28} className="text-primary" />
                                        </a>
                                        <a
                                            href="https://youtube.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaYoutube size={28} className="text-danger" />
                                        </a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Container>
            </section>
        </>

    );
}
