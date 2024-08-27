"use client";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

// Define interface for category
interface Category {
  name: string;
  id: number;
  image: string;
}

// Sample categories data
const categories: Category[] = [
  { id: 1, name: "Tecno", image: "/categories/tecno.png" },
  { id: 2, name: "Samsung", image: "/categories/samsung.png" },
  { id: 3, name: "Itel", image: "/categories/itel.png" },
  { id: 4, name: "Huawei", image: "/categories/samsung.png" },
//   { id: 5, name: "Apple", image: "/categories/apple.png" },
//   { id: 6, name: "Nokia", image: "/categories/nokia.png" },
//   { id: 7, name: "Xiaomi", image: "/categories/xiaomi.png" },
//   { id: 8, name: "Oppo", image: "/categories/oppo.png" },
];

// Typing animation variants
const typingAnimation = {
  hidden: { width: 0 },
  visible: (i: number) => ({
    width: `${i}ch`,
    transition: {
      duration: i * 0.1,
      ease: "linear",
    },
  }),
};

const Categories: React.FC = () => {
  const navigate = useNavigate();
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("animatedText");
      if (element) {
        const { top } = element.getBoundingClientRect();
        if (top <= window.innerHeight && !hasAnimated) {
          controls.start("visible");
          setHasAnimated(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls, hasAnimated]);

  const handleCategoryClick = (categoryName: string) => {
    // Navigate to the category page
    navigate(`/categories/${categoryName.toLowerCase()}`);
  };

  return (
    <div className="mx-6 md:mx-8 my-8">
      {/* Animated Heading */}
      <motion.h1
        id="animatedText"
        className="text-2xl font-bold capitalize overflow-hidden whitespace-nowrap"
        variants={typingAnimation}
        initial="hidden"
        animate={controls}
        custom={20}
      >
        Shop By Category
      </motion.h1>
      {/* Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => handleCategoryClick(category.name)}
            className="transition-transform duration-500 ease-in-out hover:scale-105  w-40 md:w-48 hover:cursor-pointer h-40 md:h-48 relative p-4 flex flex-col items-center"
          >
            <div className="border p-4 rounded-full flex items-center justify-center w-full h-full">
              <img
                src={category.image}
                alt={category.name}
                className="w-[60%] h-[60%] md:w-[80%] md:h-[80%] object-cover mb-4 rounded-md"
              />
            </div>
            <h2 className="text-xl font-semibold capitalize mt-2">
              {category.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
