import React from "react";
import { motion } from "framer-motion";

function SecondaryButton({ children, onClick }) {
    return (
        <motion.button
            onClick={onClick}
            className="flex items-center border border-tx-neutral3 font-inter text-base md:text-2xl text-s-text font-bold py-1 px-1.5 md:py-2 md:px-4 rounded-md shadow-md shadow-bg-neutral2/60 focus:outline-none cursor-pointer hover:border-transparent hover:bg-bg-secundary"
            whileHover={{
                y: -4,
                x: -4,
                boxShadow: "0px 7px 18px #323646BB)", // Sombra ligeramente más fuerte
                scale: 1.05,
                transition: {
                    duration: 0.2,
                    type: "spring",
                    stiffness: 300,
                    damping: 10,
                }, // Animación con resorte
            }}
            whileTap={{
                scale: 0.95,
                boxShadow: "inset 0px 2px 5px rgba(0, 0, 0, 0.2)",
                transition: { duration: 0.1 },
            }}
        >
            {children}
        </motion.button>
    );
}

export default SecondaryButton;
