import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HTMLLogo from "../../assets/images/technologies/HTMLLogo.svg";
import CSSLogo from "../../assets/images/technologies/CSSLogo.svg";
import JSLogo from "../../assets/images/technologies/JSLogo.svg";
import NodeJsLogo from "../../assets/images/technologies/NodeJSLogo.svg";
import GitLogo from "../../assets/images/technologies/GitLogo.svg";
import ReactLogo from "../../assets/images/technologies/react.svg";
import TWLogo from "../../assets/images/technologies/TWLogo.svg";

const TechnologyCarousel = () => {
    const settings = {
        infinite: true,
        speed: 4000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                },
            },
        ],
    };

    return (
        <div className="overflow-hidden w-full py-4 md:py-6 bg-bg-secundary/30 mb-10 md:mb-0">
            <Slider {...settings}>
                <div className="flex justify-center">
                    <img src={HTMLLogo} alt="HTML5" className="h-11 md:h-14" />
                </div>{" "}
                {/* Tailwind for centering */}
                <div className="flex justify-center">
                    <img src={CSSLogo} alt="CSS3" className="h-11 md:h-14" />
                </div>
                <div className="flex justify-center">
                    <img src={JSLogo} alt="JavaScript" className="h-11 md:h-14" />
                </div>
                <div className="flex justify-center">
                    <img src={ReactLogo} alt="React" className="h-11 md:h-14" />
                </div>
                <div className="flex justify-center">
                    <img src={NodeJsLogo} alt="Node.js" className="h-11 md:h-14" />
                </div>
                <div className="flex justify-center">
                    <img src={GitLogo} alt="Git" className="h-11 md:h-14" />
                </div>
                <div className="flex justify-center">
                    <img src={TWLogo} alt="TailWind" className="h-11 md:h-14" />
                </div>
            </Slider>
        </div>
    );
};

export default TechnologyCarousel;
