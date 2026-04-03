import React from "react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm.jsx";

export default function ContactInfo() {
    return (
        <section className="flex flex-col justify-center items-center">
            <div className="max-w-5xl w-full">
                <motion.div
                    className="flex items-center justify-around"
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <ContactForm />
                </motion.div>
            </div>
        </section>
    )
}