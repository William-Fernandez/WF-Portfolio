import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Element, scroller } from "react-scroll"; // Importa 'scroller'
import ProjectCard from "../../components/Cards/ProjectCard.jsx";
import projectsData from "../../data/projectsData.js";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

const navbarHeight = "80px";

export default function Projects() {
    const [selectedProjectId, setSelectedProjectId] = useState(null);
    const [isClosing, setIsClosing] = useState(false);

    const handleProjectSelect = (projectId) => {
        if (selectedProjectId !== null && projectId === null) {
            // Lógica para cerrar el proyecto (projectId es null)
            setIsClosing(true);
            setTimeout(() => {
                setSelectedProjectId(null);
                setIsClosing(false);
                // Desplazamiento suave de vuelta a la sección "projects"
                scroller.scrollTo("projects", {
                    smooth: true,
                    duration: 300,
                    offset: -navbarHeight,
                });
            }, 800);
        } else if (selectedProjectId === projectId) {
            // Lógica para cerrar el proyecto (si se hace clic en el mismo proyecto abierto)
            setIsClosing(true);
            setTimeout(() => {
                setSelectedProjectId(null);
                setIsClosing(false);
                scroller.scrollTo("projects", {
                    smooth: true,
                    duration: 200,
                    offset: -navbarHeight,
                });
            }, 800);
        } else {
            // Lógica para abrir un proyecto
            setSelectedProjectId(projectId);
            setIsClosing(false);
        }
    };

    const selectedProject = selectedProjectId
        ? projectsData.find((project) => project.id === selectedProjectId)
        : null;

    const otherProjects = projectsData.filter(
        (project) => project.id !== selectedProjectId
    );

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
        <Element name="projects">
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
                    Projects
                </motion.h2>
                <AnimatePresence mode="wait">
                    {selectedProject && !isClosing && (
                        <motion.div
                            key="selected"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="w-auto"
                        >
                            <ProjectCard
                                {...selectedProject}
                                onProjectSelect={handleProjectSelect}
                                isSelected={true}
                            />
                        </motion.div>
                    )}

                    {(!selectedProject || isClosing) && (
                        <motion.div
                            key="grid"
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            style={{
                                pointerEvents: isClosing ? "none" : "auto",
                            }}
                        >
                            {otherProjects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <ProjectCard
                                        {...project}
                                        onProjectSelect={handleProjectSelect}
                                        isSelected={false}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </Element>
    );
}