import LiveWebsiteScreenshot from "../assets/images/projects/zarekwebsite.png";
import CurrencyConverter from "../assets/images/projects/CurrencyConverter.webp";
import SecretSanta from "../assets/images/projects/SecretSanta.webp";

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
