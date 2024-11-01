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
        title: "Productivity App", 
        image: projectTwo,
        description: (
            <>
                <p>
                    asdfasdfasdfasdfdsafasdfasfasdfasdfsadfasdfasdf
                </p>
            </>
        ),
        github: "https://github.com",
        demo: "https://netlify.com",
    },
    3: {
        title: "Mock Website Apps", 
        image: projectThree,
        description: (
            <>
                <p>
                    asdfasdfasdfasdfdsafasdfasfasdfasdfsadfasdfasdf
                </p>
            </>
        ),
        github: "https://github.com/AJun01?tab=repositories",
        demo: "https://github.com/AJun01?tab=repositories",
    },
}


export default projects;