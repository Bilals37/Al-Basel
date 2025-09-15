import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import menuData from "../data/menu.json";
import "../CSS/menu.css";

export default function Menu() {
    const [items, setItems] = useState([]);

    const images = [
        "https://hips.hearstapps.com/hmg-prod/images/marry-me-shrimp-pasta-lead-67a2839ea6e69.jpg?crop=1xw:1xh;center,top",
        "https://hips.hearstapps.com/hmg-prod/images/salmon-steaks-lead-web-100-jg-del039925-67f67b23eacb8.jpg?crop=1xw:0.999765203099319xh;center,top",
        "https://hips.hearstapps.com/hmg-prod/images/summer-salmon-skillet-lead-685cb7ace6300.jpg?crop=1xw:1xh;center,top",
        "https://hips.hearstapps.com/hmg-prod/images/shrimp-scampi-vertical-644c0ae12cf65.jpg?crop=0.8333333333333333xw:1xh;center,top",
        "https://hips.hearstapps.com/hmg-prod/images/baked-cod-lead-65f9a24828e13.jpg?crop=0.668xw:1.00xh;0.330xw,0",
        "https://hips.hearstapps.com/hmg-prod/images/shrimp-street-corn-skillet-lead-68066d8803d8c.jpg?crop=1xw:1xh;center,top",
        "https://hips.hearstapps.com/hmg-prod/images/garlic-butter-shrimp-pasta-lead-web-0030-lp-del059925-684843d542af6.jpg?crop=1xw:0.999771845767739xh;center,top",
        "https://hips.hearstapps.com/del.h-cdn.co/assets/17/39/1600x2399/gallery-1506456214-delish-honey-garlic-glazed-salmon.jpg"
    ];

    useEffect(() => {
        setItems(menuData.menuItems);
    }, []);

    // Split items into groups for concentric circles
    const circles = [
        items.slice(0, 20),
        items.slice(20, 40),
        items.slice(40, 60)
    ];

    return (
        <section id="menu" className="py-5">
            <Container>
                <h2 className="text-center mb-5">Our Menu</h2>

                <div className="menu-border-wrapper">

                    {/* Image grid */}
                    <Row>
                        {images.map((img, idx) => (
                            <Col xs={6} md={3} key={idx} className="p-2">
                                <div className="image-wrapper">
                                    <img
                                        src={img}
                                        alt={`menu item ${idx}`}
                                        className="menu-img"
                                    />
                                </div>
                            </Col>
                        ))}
                    </Row>


                    {/* Concentric Rotating Circles */}
                    <div className="circle-rotation-wrapper">
                        <svg viewBox="0 0 400 400" className="circle-svg">
                            <defs>
                                <path
                                    id="circlePath1"
                                    d="M 200,200 m -150,0 a 150,150 0 1,1 300,0 a 150,150 0 1,1 -300,0"
                                />
                                <path
                                    id="circlePath2"
                                    d="M 200,200 m -120,0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0"
                                />
                                <path
                                    id="circlePath3"
                                    d="M 200,200 m -90,0 a 90,90 0 1,1 180,0 a 90,90 0 1,1 -180,0"
                                />
                            </defs>

                            {/* Outer Circle */}
                            <g className="rotate-circle slow">
                                <text className="rotating-text large">
                                    <textPath href="#circlePath1" startOffset="0%">
                                        {circles[0].join(" • ")}
                                    </textPath>
                                </text>
                            </g>

                            {/* Middle Circle */}
                            <g className="rotate-circle medium reverse">
                                <text className="rotating-text medium">
                                    <textPath href="#circlePath2" startOffset="0%">
                                        {circles[1].join(" • ")}
                                    </textPath>
                                </text>
                            </g>

                            {/* Inner Circle */}
                            <g className="rotate-circle fast">
                                <text className="rotating-text small">
                                    <textPath href="#circlePath3" startOffset="0%">
                                        {circles[2].join(" • ")}
                                    </textPath>
                                </text>
                            </g>
                        </svg>
                    </div>


                </div>
            </Container>
        </section>
    );
}
