import { useEffect, useRef, useState } from 'react';

export const useScrollReveal = (options = {}) => {
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Trigger animation when element is 15% visible
                if (entry.isIntersecting && entry.intersectionRatio >= 0.15) {
                    setIsVisible(true);
                    // Once revealed, stop observing for better performance
                    if (elementRef.current) {
                        observer.unobserve(elementRef.current);
                    }
                }
            },
            {
                threshold: [0, 0.15, 0.3, 0.5], // Multiple thresholds for smoother detection
                rootMargin: options.rootMargin || '-50px 0px', // Start animation slightly before element enters viewport
            }
        );

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [options.rootMargin]);

    return [elementRef, isVisible];
};
