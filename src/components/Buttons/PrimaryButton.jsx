import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

function PrimaryButton({ children, onClick }) {
    return (
        <Link
            activeClass="text-accent"
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={600}
        >
            <motion.button
                onClick={onClick}
                className="flex items-center bg-accent font-inter text-base md:text-2xl text-bg-primary font-bold py-1 px-1.5 md:py-2 md:px-4 rounded-md shadow-md border border-bg-neutral1 hover:bg-accent-darker cursor-pointer  hover:text-bg-neutral1"
                whileHover={{
                    y: -4,
                    x: 4,
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
        </Link>
    );
}

export default PrimaryButton;
