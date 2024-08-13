import crefin from '/public/image/crefin.jpg';
import travel from '/public/image/travel.jpg';
import realEstate from '/public/image/real-estate.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Dashboard for IoT based Solar charge controller',
        description: "Me and my team built an customizable IoT dashboard for Solar Charged Controller. I have developed API using Express, OpenAI, AWS, and MongoDB. Used OTP via AWS SES, Google, and Facebook for the authentication system. Built AI assistants using OpenAI's latest model and trained using our dataset. Voice messages are converted to text using AWS Transcribe. The app fetches data from Google Sheets and generates a PDF term sheet, sent via AWS SES.",
        tools: ['Java', 'Spring Boot', 'OpenAI API', 'AWS SES', 'AWS S3', 'Node Mailer', 'EC2', 'Nginx'],
        role: 'Back-End Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Employee Management System',
        description: 'I have designed and developed a full-stack web app for employee management. I created the UI using ReactJS, JavaScript, MUI, TailwindCSS, Google Maps, and React Slick. I deployed the front-end app to AWS Amplify and the back-end app to AWS EC2.',
        tools: ['Tailwind CSS', "Google Maps", "NextJS", "JavaScript", "MySQL", "AWS S3", "Gmail Passkey", "Spring Boot", "AWS EC2", "AWS Amplify", "Java"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Twitter App Clone with Flutter',
        description: 'This project aims to provide users with a social media platform where they can share updates, follow others, and engage with posts through likes, comments, and retweets. By leveraging Flutter, a UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase, the app will offer a seamless, high-performance user experience on both iOS and Android devices.',
        tools: ['Flutter', 'Dart', 'Firebase', 'AWS EC2', 'OpenAI API', 'PostgreSQL', 'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    }
    // {
    //     id: 4,
    //     name: 'Newsroom Management',
    //     description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
    //     tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
    //     code: '',
    //     demo: '',
    //     image: ayla,
    //     role: 'Full Stack Developer',
    // }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },