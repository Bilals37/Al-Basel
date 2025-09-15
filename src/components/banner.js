import React from "react";
import { Button } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "../CSS/banner.css";

export default function Banner() {
    return (
        <section className="banner">
            <div className="banner-overlay" />
            <div className="banner-content">
                <h1 className="banner-title">Al Basel Seafoods</h1>
                <p className="banner-subtitle">
                    Experience the finest seafood in Saudi Arabia – Fresh, Authentic & Delicious.
                </p>
                <div className="mt-3 d-flex flex-wrap flex-md-row flex-column gap-2">
                    <Button
                        href="#order"
                        size="sm"
                        className="banner-btn order-btn"
                    >
                        Order Now
                    </Button>
                    <Button
                        href="#reserve"
                        size="sm"
                        className="banner-btn reserve-btn"
                    >
                        Reserve Table
                    </Button>
                </div>




            </div>
        </section>
    );
}
