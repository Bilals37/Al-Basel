import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import "../CSS/location.css";

const locations = [
    {
        name: "Jeddah",
        address: "Al Basateen, Jeddah, Saudi Arabia",
        map: "https://maps.google.com/?q=Jeddah"
    },
    {
        name: "Riyadh",
        address: "Olaya Street, Riyadh, Saudi Arabia",
        map: "https://maps.google.com/?q=Riyadh"
    },
    {
        name: "Dammam",
        address: "Corniche Road, Dammam, Saudi Arabia",
        map: "https://maps.google.com/?q=Dammam"
    },
    {
        name: "Khobar",
        address: "Prince Faisal Bin Fahd Road, Khobar, Saudi Arabia",
        map: "https://maps.google.com/?q=Khobar"
    },
    {
        name: "Makkah",
        address: "Ajyad District, Makkah, Saudi Arabia",
        map: "https://maps.google.com/?q=Makkah"
    },
    {
        name: "Madinah",
        address: "Quba Road, Madinah, Saudi Arabia",
        map: "https://maps.google.com/?q=Madinah"
    }
];

export default function Location() {
    return (
        <section id="locations" className="location-section py-5">
            <Container>
                <h2 className="text-center mb-4">Our Locations</h2>
                <Row>
                    {locations.map((loc, index) => (
                        <Col key={index} md={4} sm={6} xs={12} className="mb-4">
                            <Card className="location-card shadow-sm h-100">
                                <Card.Body>
                                    <Card.Title className="location-title">{loc.name}</Card.Title>
                                    <Card.Text className="location-address">{loc.address}</Card.Text>
                                    <a
                                        href={loc.map}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-outline-primary btn-sm mt-2 location-btn"
                                    >
                                        View on Map
                                    </a>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}
