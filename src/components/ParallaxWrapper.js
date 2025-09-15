import React, { useEffect, useRef, useState } from "react";
import "../CSS/cursour.css"; // move your CSS here

const Cursor = () => {
    const [isMobile, setIsMobile] = useState(false);
    const coords = useRef({ x: 0, y: 0 });
    const circlesRef = useRef([]);

    useEffect(() => {
        // Check for mobile view
        const checkScreen = () => {
            setIsMobile(window.innerWidth <= 768); // adjust breakpoint if needed
        };

        checkScreen(); // run on mount
        window.addEventListener("resize", checkScreen);

        return () => {
            window.removeEventListener("resize", checkScreen);
        };
    }, []);

    useEffect(() => {
        if (isMobile) return; // 🚫 stop logic for mobile

        const handleMouseMove = (e) => {
            coords.current.x = e.clientX;
            coords.current.y = e.clientY;
        };

        window.addEventListener("mousemove", handleMouseMove);

        circlesRef.current.forEach((circle) => {
            if (circle) {
                circle.x = 0;
                circle.y = 0;
            }
        });

        function animateCircles() {
            let x = coords.current.x;
            let y = coords.current.y;

            circlesRef.current.forEach((circle, index) => {
                if (!circle) return;

                circle.style.left = x - 12 + "px";
                circle.style.top = y - 12 + "px";

                circle.style.transform = `scale(${(circlesRef.current.length - index) / circlesRef.current.length
                    })`;

                circle.x = x;
                circle.y = y;

                const nextCircle =
                    circlesRef.current[index + 1] || circlesRef.current[0];
                x += (nextCircle.x - x) * 0.3;
                y += (nextCircle.y - y) * 0.3;
            });

            requestAnimationFrame(animateCircles);
        }

        animateCircles();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [isMobile]);

    // 🚫 Do not render on mobile
    if (isMobile) return null;

    return (
        <div className="cursor">
            {Array.from({ length: 20 }).map((_, i) => (
                <div
                    key={i}
                    className="circle"
                    ref={(el) => (circlesRef.current[i] = el)}
                />
            ))}
        </div>
    );
};

export default Cursor;
