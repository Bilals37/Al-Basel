import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Carousel } from "react-bootstrap";
import "../CSS/reservation.css"

export default function Reservation() {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    // Generate time slots (30 min interval)
    const generateTimeSlots = () => {
        let slots = [];
        let start = new Date();
        start.setHours(10, 0, 0, 0); // Restaurant opens 10:00 AM
        let end = new Date();
        end.setHours(23, 0, 0, 0); // Closes 11:00 PM

        while (start <= end) {
            let hours = start.getHours().toString().padStart(2, "0");
            let minutes = start.getMinutes().toString().padStart(2, "0");
            slots.push(`${hours}:${minutes}`);
            start.setMinutes(start.getMinutes() + 30);
        }
        return slots;
    };

    const timeSlots = generateTimeSlots();

    const handleReservation = (e) => {
        e.preventDefault();
        const message = `Hello Bilal,%0A
I want to reserve a table.%0A
*Name:* ${name}%0A
*Date:* ${date}%0A
*Time:* ${time}%0A
*Guests:* ${guests}%0A
*Occasion:* ${occasion}%0A
%0A
Thank You!`;

        const url = `https://wa.me/918378027567?text=${message}`;
        window.open(url, "_blank");
    };

    // Prevent past dates
    const today = new Date().toISOString().split("T")[0];

    // Filter out past times if selected date = today
    const getFilteredSlots = () => {
        if (date === today) {
            const now = new Date();
            return timeSlots.filter((slot) => {
                const [hours, minutes] = slot.split(":");
                const slotTime = new Date();
                slotTime.setHours(hours, minutes, 0, 0);
                return slotTime > now; // only future slots
            });
        }
        return timeSlots;
    };

    return (
        <section id="reserve" className="py-5 bg-light">
            <Container>
                <Row className="align-items-center">
                    {/* Left Side Form */}
                    <Col md={6}>
                        <h2 className="mb-4">Reserve a Table</h2>
                        <Form onSubmit={handleReservation}>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    value={date}
                                    min={today}
                                    onChange={(e) => setDate(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Time</Form.Label>
                                <Form.Select
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                    required
                                >
                                    <option value="">Select Time</option>
                                    {getFilteredSlots().map((slot, idx) => (
                                        <option key={idx} value={slot}>
                                            {slot}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Number of Guests</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={guests}
                                    onChange={(e) => setGuests(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Occasion</Form.Label>
                                <Form.Select
                                    value={occasion}
                                    onChange={(e) => setOccasion(e.target.value)}
                                    required
                                >
                                    <option value="">Select Occasion</option>
                                    <option value="Birthday">Birthday</option>
                                    <option value="Anniversary">Anniversary</option>
                                    <option value="Wedding">Wedding</option>
                                    <option value="Office Party">Office Party</option>
                                    <option value="Family Gathering">Family Gathering</option>
                                    <option value="Other">Other</option>
                                </Form.Select>
                            </Form.Group>

                            <Button type="submit" variant="primary" className="w-100">
                                Send via WhatsApp
                            </Button>
                        </Form>
                    </Col>

                    {/* Right Side Carousel */}
                    <Col md={6} className="text-center">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 rounded"
                                    src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
                                    alt="Dine In"
                                    style={{ height: "250px", objectFit: "cover" }}
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 rounded"
                                    src="https://images.unsplash.com/photo-1551218808-94e220e084d2"
                                    alt="Happy Customers"
                                    style={{ height: "250px", objectFit: "cover" }}
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 rounded"
                                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
                                    alt="Delicious Food"
                                    style={{ height: "250px", objectFit: "cover" }}
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
