import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { motion, useInView } from "framer-motion";

function ProjectCard({
    id,
    title,
    image,
    description,
    liveLink,
    githubLink,
    longDescription,
    projectImages,
    onProjectSelect,
    isSelected,
}) {
    const cardRef = useRef(null);
    const inViewRef = useRef(null);
    const isInView = useInView(inViewRef, { once: true, margin: "-100px" });

    const [cardHeight, setCardHeight] = useState("px");
    const [imageLoadingError, setImageLoadingError] = useState(false);

    useEffect(() => {
        if (cardRef.current && isSelected) {
            setCardHeight(cardRef.current.scrollHeight + "px");
        } else {
            setCardHeight("px");
        }
    }, [isSelected, longDescription, projectImages]);

    const handleImageError = () => {
        setImageLoadingError(true);
    };

    return (
        <motion.div
            ref={(el) => {
                cardRef.current = el;
                inViewRef.current = el;
            }}
            style={{ maxHeight: isSelected ? cardHeight : "px", overflow: "hidden" }}
            className={`bg-bg-secundary/30 shadow-2xl rounded-lg overflow-hidden max-w-5xl mb-10 shadow-bg-secundary/50 transition-max-height duration-800 ease-in-out ${
                isSelected ? "w-[90vw] mb-0" : ""
            }`}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            {image && !isSelected && !imageLoadingError && (
                <img
                    className="w-full h-44 object-cover"
                    src={image}
                    alt={title}
                    onError={handleImageError}
                />
            )}
            {imageLoadingError && !isSelected && (
                <div className="w-full h-44 flex items-center justify-center bg-gray-200 text-gray-500">
                    Error al cargar la imagen
                </div>
            )}
            <div className="p-4">
                <h3 className="text-xl font font-semibold text-tx-neutral4 mb-2 text-center">
                    {title}
                </h3>
                {!isSelected && (
                    <p className="text-tx-neutral4/80 mb-4 text-sm h-21 overflow-hidden">
                        {description}
                    </p>
                )}
                <div className="flex space-x-2 md:space-x-3">
                    {liveLink && !isSelected && (
                        <a
                            href={liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-accent hover:bg-accent-darker text-bg-neutral1 font-bold py-1 px-2 rounded text-xs md:text-sm"
                            aria-label={`Enlace a la demo en vivo de ${title}`}
                        >
                            Live Demo
                        </a>
                    )}
                    {githubLink && !isSelected && (
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-accent border border-accent font-bold py-1 px-2 rounded text-xs md:text-sm hover:text-accent-darker hover:border-accent-darker hover:bg-bg-secundary transition-all ease-in-out"
                            aria-label={`Enlace al repositorio de GitHub de ${title}`}
                        >
                            GitHub
                        </a>
                    )}
                    {longDescription && !isSelected && (
                        <button
                            onClick={() => onProjectSelect(id)}
                            className="inline-block text-s-text border border-tx-neutral3 font-bold py-1 px-2 rounded cursor-pointer text-xs md:text-sm hover:border-transparent hover:bg-bg-secundary transition-all ease-in-out"
                            aria-label={`Ver más detalles del proyecto ${title}`}
                            aria-expanded={false}
                            aria-controls={`project-details-${id}`}
                        >
                            See more
                        </button>
                    )}
                </div>

                {isSelected && longDescription && (
                    <div
                        id={`project-details-${id}`}
                        className="my-5 max-w-full text-s-text markdown-content"
                    >
                        {projectImages && projectImages.length > 0 && (
                            <div className="flex flex-wrap justify-center w-full mb-10">
                                {projectImages.map((imgUrl, index) => (
                                    <img
                                        key={projectImages[index]?.id || index}
                                        src={imgUrl}
                                        alt={`${title} - Image ${index + 1}`}
                                    />
                                ))}
                            </div>
                        )}
                        <ReactMarkdown>{longDescription}</ReactMarkdown>
                        <button
                            onClick={() => onProjectSelect(null)}
                            className="inline-block mt-4 text-accent border border-accent font-bold py-0.5 px-2 rounded cursor-pointer md:ml-8"
                            aria-label={`Mostrar menos detalles del proyecto ${title}`}
                            aria-expanded={true}
                            aria-controls={`project-details-${id}`}
                        >
                            Show less
                        </button>
                    </div>
                )}
            </div>
        </motion.div>
    );
}

export default ProjectCard;
