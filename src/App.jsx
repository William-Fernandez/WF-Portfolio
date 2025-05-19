import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import AboutMe from "./Pages/About/AboutMe";
import Contact from "./Pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import UseLenis from "./hooks/UseLenis";
import TechnologyCarousel from "./components/About/TechnologyCarousel";

function App() {
    return (
        <div className="relative h-full w-full">
            <UseLenis>
                <div className="-z-20 fixed h-screen w-full bg-bg-primary top-0 left-0">
                    <div className="-z-10 absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_400px_at_50%_200px,#A3C6B322,transparent)]"></div>
                </div>
                <Navbar />
                <Home />
                <Projects />
                <AboutMe />
                <TechnologyCarousel />
                <Contact />
                <Footer />
            </UseLenis>
        </div>
    );
}

export default App;
