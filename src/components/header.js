import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "../CSS/header.css";
import logo from "../data/download.jpeg";

export default function Header() {
    const [expanded, setExpanded] = useState(false);

    // toggle handler for the hamburger
    const handleToggle = () => setExpanded(prev => !prev);

    // close handler for links / buttons
    const close = () => setExpanded(false);

    return (
        <Navbar
            bg="dark"
            variant="dark"
            expand="lg"
            expanded={expanded}
            onToggle={(next) => setExpanded(next)}
            className="custom-navbar"
            collapseOnSelect={false}
        >
            <Container fluid className="custom-container">
                <Navbar.Brand href="#home" onClick={close} className="d-flex align-items-center">
                    <img
                        src={logo}
                        alt="logo"
                        width="60"
                        height="60"
                        className="d-inline-block align-top me-2 logoimg"
                    />

                    <span className="brand-name">Al Basel Seafoods</span>
                </Navbar.Brand>

                {/* Explicit toggle click to ensure reliable toggling */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} aria-expanded={expanded} />

                <Navbar.Collapse id="basic-navbar-nav">
                    {/* center links on mobile, normal flow on desktop */}
                    <Nav
                        className="mx-auto mobile-center-nav"
                        onSelect={close} /* will also close if using Nav's selection */
                    >
                        <Nav.Link href="#home" onClick={close}>Home</Nav.Link>
                        <Nav.Link href="#about" onClick={close}>About Us</Nav.Link>
                        <Nav.Link href="#menu" onClick={close}>Menu</Nav.Link>
                        <Nav.Link href="#contact" onClick={close}>Contact Us</Nav.Link>
                    </Nav>

                    {/* Action buttons — visible only on lg+ */}
                    <div className="d-none d-lg-flex align-items-center action-buttons">
                        <Button variant="success" href="#order" className="me-2 order-btn" onClick={close}>
                            Order Now
                        </Button>
                        <Button className="reserve-btn" href="#reserve" onClick={close}>
                            Reserve Table
                        </Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
