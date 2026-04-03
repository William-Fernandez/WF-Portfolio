import React, { useEffect } from "react";
import { Element } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import ContactForm from "../../components/ContactMe/ContactForm.jsx";

const navbarHeight = "80px";

export default function Contact() {
    // Animacion para titulo projects
    const { ref: titleRef, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const mainControls = useAnimation();

    useEffect(() => {
        if (inView) {
            mainControls.start("visible");
        }
    }, [inView, mainControls]);

    return (
        <Element name="contact">
            <AnimatePresence mode="wait">
                <div
                    className="flex flex-col justify-center items-center max-w-11/12 mx-auto px-4"
                    style={{ minHeight: `calc(100dvh - ${navbarHeight})` }}
                >
                    <motion.h2
                        className="uppercase font-inter text-3xl md:text-4xl font-bold text-p-text my-6"
                        ref={titleRef}
                        animate={mainControls}
                        initial="hidden"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                                opacity: 1,
                                y: 0,
                            },
                        }}
                        transition={{ delay: 0.5 }}
                    >
                        Contact
                    </motion.h2>
                    <motion.div
                        className="flex w-full items-center justify-around"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <ContactForm />
                    </motion.div>
                </div>
            </AnimatePresence>
        </Element>
    );
}
