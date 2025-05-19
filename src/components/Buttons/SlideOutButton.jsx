import React from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/solid"; // Or your preferred arrow icon

function SlideOutButton() {
    return (
        <div className="relative inline-block">
            {/* The Black Container (Shadow) */}
            <div className="absolute -z-10 top-0 left-0 w-full h-full bg-black rounded-md" />

            {/* The White Button */}
            <motion.button
                className="
            relative
            z-0
            px-8
            py-4
            bg-white
            text-black
            font-bold
            rounded-md
            overflow-hidden /* Clip the text animation */
        "
                whileHover={{
                    x: 60, // Adjust this value to control the slide distance
                    transition: { duration: 0.3, ease: "easeInOut" },
                }}
                whileTap={{ scale: 0.95 }}
            >
                {/* Text Container for Animation */}
                <motion.span
                    className="inline-block"
                    initial={{ x: 0 }}
                    animate={{ x: 0 }}
                    whileHover={{
                        x: -10, // Subtle text movement to the left
                        opacity: 0.8, // Slight fade out
                        transition: { duration: 0.3, ease: "easeInOut" },
                    }}
                >
                    HOVER ME!
                </motion.span>

                {/* Arrow Icon */}
                <motion.span
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-red-500"
                    initial={{ x: 0, opacity: 1 }}
                    animate={{ x: 0, opacity: 1 }}
                    whileHover={{
                        x: 20, // Move the arrow to the right
                        opacity: 1,
                        transition: { duration: 0.3, ease: "easeInOut" },
                    }}
                >
                    <ArrowRightIcon className="w-6 h-6" />
                </motion.span>
            </motion.button>
        </div>
    );
}

export default SlideOutButton;
