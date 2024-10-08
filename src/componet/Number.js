import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

export default function Number({ number, time }) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop observing once the element is visible
                }
            },
            { threshold: 0.1 } // Trigger when 10% of the element is visible
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div className="number" ref={ref}>
            {isVisible && (
                <CountUp duration={time} className="counter" end={number} />
            )}
        </div>
    );
}
