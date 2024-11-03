import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
    1: {
        title: "Flexbench", 
        image: projectOne,
        description: (
            <>
                <p>
                Flexbench is a fully customizable NodeJS script , generating simulated HTTP traffic. It can be used as a standalone script, as a desktop-app and as a server to simulate traffic with specific characteristics, such as read/write ratio, duration, number of requests to generate, in/out traffic throttling and more.
                </p>
            </>
        ),
        github: "https://github.com/flexivian/flexbench",
        demo: "https://flexivian.github.io/flexbench/",
    },
    2: {
        title: "Weather App", 
        image: projectTwo,
        description: (
            <>
                <p>
                The Weather App is a Node.js and Express web application that allows users to view real-time weather information based on their location. By entering a ZIP code and country code, users can access data like temperature, humidity, wind speed, and visibility, provided by the OpenWeatherMap API. The app enhances the experience with dynamic visual effects—such as rain, sunshine, clouds, or night scenes—that reflect the current weather conditions. Built with a responsive and interactive design, this project provides an engaging way to stay informed about the weather.
                </p>
            </>
        ),
        github: "https://github.com/AJun01/weather-app",
        demo: "https://github.com/AJun01/weather-app",
    },
    3: {
        title: "Yoga Class Registar", 
        image: projectThree,
        description: (
            <>
                <p>
                The Yoga Instructor Registration Application streamlines the registration process for yoga training programs, enabling users to create accounts, choose program levels (Beginner, Intermediate, Advanced), provide prior training details, upload certifications, and make secure payments via Stripe. Developed for CS601 coursework, this responsive app leverages a React frontend with React Router, CSS3 styling, and a Node.js/Express backend. Key features include user registration, program selection, payment processing, and a user-friendly interface optimized for multiple devices.
                </p>
            </>
        ),
        github: "https://github.com/AJun01/Registar",
        demo: "https://github.com/AJun01/Registar",
    },
}


export default projects;