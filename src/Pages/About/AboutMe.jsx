import React, { useEffect } from "react";
import { Element } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import AboutInfo from "../../components/About/AboutInfo.jsx";

const navbarHeight = "80px";

export default function AboutMe() {
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
        <Element name="about">
            <AnimatePresence mode="wait">
                <div
                    className="flex flex-col justify-center items-center max-w-11/12 mx-auto px-4"
                    style={{ minHeight: `calc(100dvh - ${navbarHeight})` }}
                >
                    <motion.h2
                        className="uppercase font-inter text-3xl md:text-4xl font-bold text-p-text mb-6 md:my-6"
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
                        About Me
                    </motion.h2>
                    <AboutInfo />
                </div>
            </AnimatePresence>
        </Element>
    );
}
