import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    // Extracts pathname property(key) from an object
    const { pathname } = useLocation();

    // Function to smoothly scroll to the top
    const smoothScrollToTop = () => {
        const scrollToTop = () => {
            const currentPosition = window.pageYOffset;
            if (currentPosition > 0) {
                window.requestAnimationFrame(scrollToTop);
                window.scrollTo(0, currentPosition - currentPosition / 8);
            }
        };
        scrollToTop();
    };

    // Automatically scrolls to top with smooth effect whenever pathname changes
    useEffect(() => {
        smoothScrollToTop();
    }, [pathname]);

    return null; // This component doesn't render anything
}

export default ScrollToTop;
