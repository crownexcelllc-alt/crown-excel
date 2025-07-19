// components/ScrollToTopButton.tsx
"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // Or any icon you prefer
import { FaChevronUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed flex items-center justify-center cursor-pointer opacity-70 bottom-6 right-6 z-50 bg-[#084032] text-white w-[50px] h-[50px] rounded shadow-lg  transition-all"
        >
          <FaChevronUp />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
