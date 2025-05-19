import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PDataIllustration from "../../assets/images/illustrations/personalData.svg";
import CodingIllustration from "../../assets/images/illustrations/coding.svg";
import StartUpIllustration from "../../assets/images/illustrations/startup.svg";

export default function AboutInfo() {
    const [showMore, setShowMore] = useState(false);

    return (
        <section className="flex flex-col justify-center items-center px-3 md:px-6 bg-bg-secundary/30 rounded-lg mb-10 md:mb-20">
            <div className="max-w-4xl w-full my-4">
                {/* Primer bloque siempre visible */}
                <motion.div
                    className="flex items-center md:gap-4"
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <img
                        src={PDataIllustration}
                        alt="Personal Data Illustration"
                        className="w-28 h-28 md:w-32 md:h-32 object-contain"
                    />
                    <p className="font-inter text-s-text text-pretty text-sm">
                        Hello! I'm{" "}
                        <strong className="text-accent">
                            William Fernandez
                        </strong>
                        , a Colombian creative{" "}
                        <span className="font-bold text-info">
                            based in London
                        </span>{" "}
                        with a background in music production and DJing. My
                        journey into web development began when I wanted to
                        build my own website, what started as a personal need
                        quickly became a deep passion.
                    </p>
                </motion.div>

                {/* Acordeón animado */}
                <AnimatePresence>
                    {showMore && (
                        <motion.div
                            key="accordion-content"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="overflow-hidden space-y-2.5"
                        >
                            {/* Segundo bloque */}
                            <motion.div
                                className="flex items-center gap-4"
                                initial={{ opacity: 0, x: -80 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <p className="font-inter text-s-text text-pretty text-sm mt-4 md:mt-0">
                                    Over the past year, I’ve dedicated myself to
                                    mastering both the fundamentals and more
                                    advanced areas of web development. I’ve
                                    built{" "}
                                    <span className="font-bold text-info">
                                        full-stack projects
                                    </span>{" "}
                                    including my live music website (deployed on
                                    my own VPS using Hostinger), a currency
                                    converter with{" "}
                                    <span className="font-bold text-info">
                                        API integration
                                    </span>{" "}
                                    and{" "}
                                    <span className="font-bold text-info">
                                        history tracking
                                    </span>
                                    , and a functional contact form with backend
                                    error handling. I’ve also managed a client’s{" "}
                                    <span className="font-bold text-info">
                                        WordPress
                                    </span>{" "}
                                    site, maintaining and updating its content.{" "}
                                    <br /> <br />
                                    Although I’m currently strongest in{" "}
                                    <span className="font-bold text-info">
                                        frontend
                                    </span>{" "}
                                    development. Working with{" "}
                                    <span className="font-bold text-info">
                                        React
                                    </span>
                                    ,{" "}
                                    <span className="font-bold text-info">
                                        Tailwind CSS
                                    </span>
                                    , and{" "}
                                    <span className="font-bold text-info">
                                        JavaScript
                                    </span>
                                    . I also have solid{" "}
                                    <span className="font-bold text-info">
                                        backend
                                    </span>{" "}
                                    knowledge using{" "}
                                    <span className="font-bold text-info">
                                        Node.js
                                    </span>
                                    ,{" "}
                                    <span className="font-bold text-info">
                                        Express
                                    </span>
                                    , and{" "}
                                    <span className="font-bold text-info">
                                        SQLite/PostgreSQL
                                    </span>
                                    , and I'm actively improving in this area.
                                    I’ve explored{" "}
                                    <span className="font-bold text-info">
                                        UX/UI
                                    </span>{" "}
                                    through a course on Domestika and use Figma
                                    when needed, but I often rely on my creative
                                    intuition for design.
                                </p>
                                <img
                                    src={CodingIllustration}
                                    alt="Coding Illustration"
                                    className="hidden md:block w-32 h-32 object-contain"
                                />
                            </motion.div>

                            {/* Tercer bloque */}
                            <motion.div
                                className="flex items-center gap-4 pb-4"
                                initial={{ opacity: 0, x: 80 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <img
                                    src={StartUpIllustration}
                                    alt="Startup Illustration"
                                    className="hidden md:block w-32 h-32 object-contain"
                                />
                                <p className="font-inter text-s-text text-pretty text-sm">
                                    I’m fluent in Spanish, speak English
                                    confidently, and have basic knowledge of
                                    Italian. I’m a calm, collaborative, and
                                    highly motivated person, open to feedback
                                    and committed to continuous learning. I'm
                                    looking for{" "}
                                    <span className="font-bold text-info">
                                        junior
                                    </span>{" "}
                                    opportunities{" "}
                                    <span className="font-bold text-info">
                                        (full-stack or frontend)
                                    </span>{" "}
                                    in startups, creative agencies, or product
                                    teams where I can grow professionally and
                                    contribute meaningfully.
                                </p>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Botón toggle */}
                <div className="text-center pt-4">
                    <button
                        onClick={() => setShowMore(!showMore)}
                        className="text-accent underline text-sm hover:text-accent-darker cursor-pointer transition-all py-1 px-2 font-bold"
                    >
                        {showMore ? "Show less" : "Read more here"}
                    </button>
                </div>
            </div>
        </section>
    );
}
