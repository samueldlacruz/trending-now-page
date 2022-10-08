import React, { useEffect, useState } from 'react'

const ScrollToTop = () => {
    
    const [showTopButton, setShowTopButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 450) return setShowTopButton(true);
            setShowTopButton(false);
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="relative">
            {showTopButton && <button onClick={goToTop} className="mb-4 mr-4 fixed bottom-0 right-0 h-14 w-14 bg-slate-800/50 hover:bg-slate-700 rounded-full border border-slate-500">
                <i className="ri-arrow-up-line text-white text-xl bottom-0 left-0"></i>
            </button>}
        </div>
    )
}

export default ScrollToTop