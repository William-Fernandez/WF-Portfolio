import React, { useState } from "react";
import { Link } from "react-scroll";
import LogoW from "../../assets/images/logos/WFernandez/FiguralogoWFw.webp";
import { motion } from "framer-motion";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navbarVariants = {
        initial: { opacity: 1, y: -50 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
    };

    const mobileMenuVariants = {
        open: { height: 'auto', opacity: 1, transition: { staggerChildren: 0.1 } },
        closed: { height: 0, opacity: 0, transition: { duration: 0.3, ease: [0.68, -0.55, 0.265, 1.55], staggerChildren: 0.05, staggerDirection: -1 } },
    };

    const menuItemVariants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: 10 },
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 bg-bg-primary/30 font-inter backdrop-blur-md rounded-b-lg shadow-md z-50 flex items-center justify-between px-4 py-2.5"
            initial="initial"
            animate="animate"
            variants={navbarVariants}
        >
            <div className="flex items-center">
                <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="flex items-center space-x-2 cursor-pointer"
                    onClick={closeMobileMenu}
                >
                    <motion.img
                        src={LogoW}
                        className="h-10 md:h-12"
                        alt="W | Fernandez Logo"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                    />
                    <motion.span className="self-center text-lg hidden md:block md:text-xl font-semibold whitespace-nowrap text-p-text"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    >
                        W | Fernandez
                    </motion.span>
                </Link>
            </div>

            <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-s-text rounded-lg hover:bg-bg-secundary focus:outline-none focus:ring-2 focus:ring-bg-secundary transition-colors ease-in-out"
                aria-controls="navbar-solid-bg"
                aria-expanded={isMobileMenuOpen}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
                <span className="sr-only">{isMobileMenuOpen ? "Close menu" : "Open menu"}</span>
                {isMobileMenuOpen ? (
                    <motion.div
                        key="close"
                        initial={{ opacity: 0, rotate: 0 }}
                        animate={{ opacity: 1, rotate: 90 }}
                        exit={{ opacity: 0, rotate: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <XMarkIcon className="w-6 h-6" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="open"
                        initial={{ opacity: 0, rotate: -90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: -90 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Bars3BottomRightIcon className="w-10 h-8" />
                    </motion.div>
                )}
            </motion.button>

            <motion.div
                className={`absolute top-full left-0 w-full overflow-hidden bg-bg-primary/90 backdrop-blur-md shadow-md`}
                id="navbar-solid-bg"
                initial="closed"
                animate={isMobileMenuOpen ? "open" : "closed"}
                variants={mobileMenuVariants}
            >
                <ul className="flex flex-col p-8 space-y-6 items-center text-3xl font-semibold text-white">
                    <motion.li variants={menuItemVariants}>
                        <Link
                            activeClass="text-accent"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            className="cursor-pointer hover:text-accent transition-colors ease-in-out"
                            aria-current="page"
                            onClick={closeMobileMenu}
                        >
                            Home.
                        </Link>
                    </motion.li>
                    <motion.li variants={menuItemVariants}>
                        <Link
                            activeClass="text-accent"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            className="cursor-pointer hover:text-accent transition-colors ease-in-out"
                            onClick={closeMobileMenu}
                        >
                            Projects.
                        </Link>
                    </motion.li>
                    <motion.li variants={menuItemVariants}>
                        <Link
                            activeClass="text-accent"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            className="cursor-pointer hover:text-accent transition-colors ease-in-out"
                            onClick={closeMobileMenu}
                        >
                            About Me.
                        </Link>
                    </motion.li>
                    <motion.li variants={menuItemVariants}>
                        <Link
                            activeClass="text-accent"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            className="cursor-pointer hover:text-accent transition-colors ease-in-out"
                            onClick={closeMobileMenu}
                        >
                            Contact.
                        </Link>
                    </motion.li>
                </ul>
            </motion.div>
        </motion.nav>
    );
}