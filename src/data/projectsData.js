import LiveWebsiteScreenshot from "../assets/images/projects/zarekwebsite.png";
import CurrencyConverter from "../assets/images/projects/CurrencyConverter.webp";
import SecretSanta from "../assets/images/projects/SecretSanta.webp";
import MNTRVRecords from "../assets/images/projects/MNTRVRecords.webp";

const projectsData = [
    {
        id: "zarekmusic-landingpage",
        title: "Live Landing Page",
        image: LiveWebsiteScreenshot,
        description:
            "An artist's website built with React, Vite, and Tailwind CSS to showcase my skills and projects.",
        liveLink: "https://zarekmusic.com",
        githubLink: "https://github.com/William-Fernandez/zarekmusic-react",
        longDescription: `
A personal project showcasing my skills in building a comprehensive online presence for a music artist. The platform features music promotion, new releases, gig listings, and contact options.


Initially built with core web technologies, the site was modernised using **React with Vite** for an efficient frontend. Styling is handled with Tailwind CSS for responsiveness. React Router DOM enables dynamic page navigation.


Backend functionality for the contact form utilises the SendGrid API, managed with Node.js (\`server.js\`) and \`.env\` for security. Music data from platforms like Beatport and Bandcamp is managed locally using JavaScript data files. A smooth scrolling experience is implemented with a custom \`useLenis.js\` hook, and a NotFound page handles invalid URLs.


### Key Skills & Technologies:


- **Frontend:** React, Vite, Tailwind CSS, JavaScript, React Router DOM, Custom Hooks.
- **Backend (Fundamentals):** Node.js (for API integration), REST API consumption (SendGrid).
- **Data Management:** JSON, Local Data Handling.
- **Routing:** Client-side routing.
- **Error Handling:** Custom 404 page.


This project demonstrates my ability to develop a full-fledged web application, integrating frontend dynamism with basic backend API handling.
        `,
        projectImages: [
            "/images/projects/zarekmusic/BioZarek.webp",
            "/images/projects/zarekmusic/StoreZarek.webp",
            "/images/projects/zarekmusic/FormZarek.webp",
        ],
    },
    {
        id: "mntrvrecords-website",
        title: "Music Label Showcase",
        image: MNTRVRecords,
        description:
            "A dynamic, single-page application for a music label, featuring a full catalogue of releases with a custom purchase modal and interactive 3D elements.",
        liveLink: "https://mntrvrecords.com",
        githubLink: "https://github.com/William-Fernandez/MNTRVRecords.git",
        longDescription: `
This project serves as a comprehensive web presence for a music label, focusing on showcasing their discography and providing a seamless user experience. The platform highlights the latest releases on the homepage and provides a full catalogue of all music.

The core functionality is centred around the **release catalogue**. Each item features a "Buy Now" button that triggers a custom-built modal window. This modal presents users with options to purchase either a digital or physical (vinyl) copy, intelligently redirecting them to the correct external store (e.g., Bandcamp or Beatport) for the selected format.

A key highlight of the project is the **About** section, which features a custom 3D animated logo. The logo's rotation and scale are dynamically controlled by the user's scroll position, creating an interactive and visually engaging element that demonstrates advanced frontend animation skills.

From a technical perspective, the site is a **Single-Page Application (SPA)** built with **React with Vite**. It uses **Tailwind CSS** for a responsive and modern design, and **Framer Motion** for smooth page transitions and micro-interactions. The contact form is handled by **EmailJS** for serverless email functionality.

### Key Skills & Technologies:

-   **Frontend:** React, Vite, Tailwind CSS, JavaScript.
-   **Animations:** Framer Motion, 3D Scroll-Based Animations (react-three/fiber).
-   **Functionality:** Custom Modal Windows, API Redirection, Dynamic Content Rendering.
-   **Form Handling:** React Hook Form, EmailJS.
-   **Deployment & Routing:** Nginx, Server Configuration for SPA routes.

This project demonstrates a comprehensive skill set in frontend development, including the integration of complex animations and interactive user experiences, alongside robust form and deployment solutions.
        `,
        projectImages: [
            "/images/projects/mntrvrecords/featuredMusic.webp",
            "/images/projects/mntrvrecords/aboutMNTRV.webp",
            "/images/projects/mntrvrecords/catalogueMNTRV.webp",
            "/images/projects/mntrvrecords/modalBuyFormat.webp",
        ],
    },
    {
        id: "literalura-catalogue",
        title: "Backend Book Catalogue",
        image: "https://placehold.co/400x300/e5e7eb/4b5563?text=JAVA+SPRING+BOOT+PSQL",
        description:
            "A console-based book catalogue built with Java, Spring Boot, and PostgreSQL, showcasing backend development and API integration.",
        githubLink: "https://github.com/William-Fernandez/Literatura",
        longDescription: `
LiterAlura is an interactive backend application developed in **Java** using the **Spring Boot** framework. It functions as a book catalogue that interacts with the Gutendex API, stores data persistently in a **PostgreSQL** database, and allows users to query this data via a console interface.

This project focuses on core backend development skills and demonstrates the ability to build robust, data-driven applications.

Key features include:

-   **API Integration:** Connects to the Gutendex API to search for books by keyword, a fundamental skill in modern software development.
-   **Data Persistence:** Uses **Spring Data JPA** and **Hibernate** to map objects to a **PostgreSQL** database. This ensures that book and author information is stored and can be queried efficiently without repeated API calls.
-   **Database Management:** Demonstrates proficiency in database schema management and configuration, including the use of environment variables for secure credential handling.
-   **Console-Based UI:** The user interacts with the application through a command-line interface, showcasing strong programming fundamentals and a clear separation of concerns from the frontend.

### Key Skills & Technologies:

-   **Backend:** Java 21.0.7, Spring Boot.
-   **Database:** PostgreSQL, Spring Data JPA, Hibernate.
-   **Build Tool:** Maven.
-   **API:** REST API Consumption.
-   **Security:** Environment Variables for sensitive data.

This project is a strong testament to my abilities in backend development, showcasing my understanding of database operations, API handling, and secure, maintainable code architecture.
        `,
        projectImages: [],
    },
    {
        id: "currency-converter-app",
        title: "Console Currency Converter",
        image: CurrencyConverter,
        description:
            "A command-line application to convert between different currencies. Built with JavaScript and runs in the Node.js environment.",
        githubLink: "https://github.com/William-Fernandez/ConversorMoneda.git",
        longDescription: `
### Simple Currency Converter (Console Application)


A command-line tool developed to provide users with instant currency conversions using real-time exchange rates. The application allows users to select base and target currencies, input an amount, and receive the converted value. It also features a currency code guide and a history of past conversions, including timestamps.


Developed using **Java JDK** for the core logic, the application integrates the **ExchangeRate-API** to fetch up-to-date currency data. **Gson Library** is used for efficient handling of JSON responses from the API. The application also implements a system to record conversion history using \`java.time\` (LocalDateTime).


### Key Skills & Technologies:


- **Backend Development:** Java, Data Handling, API Integration (RESTful).
- **Data Parsing:** JSON processing with Gson.
- **Date and Time Management:** Using \`java.time\` for logging.
- **Data Storage (Basic):** In-memory list for conversion history.
- **Command-Line Interface (CLI):** User interaction through the console.


This project demonstrates my ability to build a functional backend application in Java that interacts with external APIs, manages data in JSON format, and provides a user interface through the command line. It highlights my understanding of core programming principles and API integration.
        `,
        projectImages: [
            "/images/projects/currencyconverter/CurrencyConverter.webp",
            "/images/projects/currencyconverter/CurrencyConverterISO.webp",
            "/images/projects/currencyconverter/CurrencyConverterA.webp",
            "/images/projects/currencyconverter/CurrencyConverterH.webp",
        ],
    },
    {
        id: "secret-santa-app",
        title: "Secret Santa App",
        image: SecretSanta,
        description:
            "A web application (or potentially just backend logic) for organizing Secret Santa gift exchanges.",
        githubLink:
            "https://github.com/William-Fernandez/challenge-amigo-secreto.git",
        longDescription: `
### Secret Santa Picker


This is a web application designed for conducting a "Secret Santa" draw. Users can input names into a list, and the application will then randomly select one name from the list when prompted. The application is built using fundamental web technologies: HTML for structure, CSS for styling, and JavaScript for the application's logic.


### Key Features:


- **Add Names:** Users can type the names of their friends into a text field and add them to a visible list by clicking the "Add" button.
- **Input Validation:** If the text field is empty when trying to add a name, an alert will inform the user that a name is required.
- **Visualise List:** The entered names are displayed in a clear list on the webpage.
- **Random Draw:** Upon clicking the "Draw Friend" button, the application randomly selects a name from the list and displays it on the screen.


### Key Skills & Technologies:


- **Frontend Development:** HTML, CSS, JavaScript.
- **DOM Manipulation:** Dynamically updating the webpage content based on user interaction.
- **Event Handling:** Implementing functionality for button clicks and input changes.
- **Basic Validation:** Ensuring users provide necessary input.
- **Random Number Generation:** Implementing the core logic for the random name selection.


This project demonstrates my foundational understanding of frontend web development using core technologies to create an interactive user experience. It showcases my ability to handle user input, manipulate the Document Object Model (DOM), and implement basic application logic with JavaScript.
        `,
        projectImages: [
            "/images/projects/secretsanta/SecretSanta.webp",
            "/images/projects/secretsanta/SecretSanta2.webp",
            "/images/projects/secretsanta/SecretSanta3.webp",
            "/images/projects/secretsanta/SecretSanta4.webp",
        ],
    },
];

export default projectsData;
