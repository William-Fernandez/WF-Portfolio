import React, { useState, useEffect } from "react";
import PrimaryButton from "../../Buttons/PrimaryButton.jsx";
import SecondaryButton from "../../Buttons/SecondaryButton.jsx";
import WFernandezAnimado from "../../../assets/images/logos/WFernandez/WFernandezAnimadoSm.webp";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import LinkedInLogo from "../../../assets/images/logos/InBug-White.png";

const navbarHeight = "80px";

export default function Info() {
    const textToType = "H i there, I'm William";
    const [displayedText, setDisplayedText] = useState("");
    const typingSpeed = 90;

    useEffect(() => {
        let index = 0;
        let timer;

        function typeWriter() {
            if (index < textToType.length) {
                setDisplayedText(
                    (prevText) => prevText + textToType.charAt(index)
                );
                index++; // Increment AFTER getting the character
                timer = setTimeout(typeWriter, typingSpeed);
            }
        }

        // Start the typing animation
        timer = setTimeout(typeWriter, typingSpeed);

        // Cleanup the timer on unmount
        return () => clearTimeout(timer);
    }, [textToType, typingSpeed]);

    return (
        <div
            className="flex flex-col justify-center items-center h-full md:h-dvh w-full"
            style={{
                minHeight: `calc(100vh - ${navbarHeight})`, // Para navegadores que no soportan dvh inicialmente
                "@media (maxWidth: theme('screens.md'))": {
                    height: `calc(100vh - ${navbarHeight})`, // Ajuste de altura para móviles
                },
                "@media (minWidth: theme('screens.md'))": {
                    minHeight: "100dvh", // Asegura al menos la altura del viewport dinámico
                    height: "100dvh",
                },
            }}
        >
            <div className="flex flex-col items-center w-4/5 relative">
                {" "}
                <div className="w-3xs md:block flex justify-center relative">
                    {" "}
                    <div className="w-56 md:w-full">
                        <img
                            src={WFernandezAnimado}
                            alt="William Fernandez Animado"
                            className="w-full"
                        />
                    </div>
                    <span
                        className="hidden md:flex absolute top-10 transform -translate-x-1/2 -translate-y-full mt-2 text-sm text-tx-neutral4 bg-bg-neutral2 rounded-md rounded-br-none p-1 shadow-lg shadow-bg-secundary/50"
                        style={{
                            whiteSpace: "nowrap",
                            alignItems: "center",
                        }}
                    >
                        <span>{displayedText}</span>
                        <span className="blinkingCursor"></span>
                    </span>
                </div>
                <div className="flex flex-col items-center mt-1">
                    <h1 className="font-inter font-extrabold text-4xl md:text-5xl text-p-text text-center">
                        A Junior Web Developer
                    </h1>
                    <p className="text-xl md:text-4xl text-s-text text-center mt-1">
                        Ready to Build{" "}
                        <span className="underline underline-offset-6 decoration-accent">
                            Scalable Web Solutions.
                        </span>
                    </p>
                    <div className="mt-6 md:mt-10 flex space-x-3">
                        <PrimaryButton>
                            <EnvelopeIcon className="size-4 md:size-6 mr-1.5 md:mr-2" />
                            Get in touch
                        </PrimaryButton>
                        <SecondaryButton>
                            <img
                                src={LinkedInLogo}
                                alt="Linked In Logo"
                                className="h-4 md:h-5 mr-1.5 md:mr-2"
                            />
                            <a
                                href="https://www.linkedin.com/in/william-fernandez-dev/"
                                target="_blank"
                            >
                                LinkedIn
                            </a>
                        </SecondaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
}
