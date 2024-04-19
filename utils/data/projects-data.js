import crefin from '/public/image/crefin.jpg';
import travel from '/public/image/travel.jpg';

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
        name: 'Employee Management App',
        description: 'I have designed and developed a full-stack web app for employee management. I created the UI using ReactJS, JavaScript, MUI, TailwindCSS, Google Maps, and React Slick. I deployed the front-end app to AWS Amplify and the back-end app to AWS EC2.',
        tools: ['Tailwind CSS', "Google Maps", "NextJS", "JavaScript", "MySQL", "AWS S3", "Gmail Passkey", "Spring Boot", "AWS EC2", "AWS Amplify", "Java"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    // {
    //     id: 3,
    //     name: 'AI Powered Real Estate',
    //     description: 'My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.',
    //     tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
    //     code: '',
    //     role: 'Full Stack Developer',
    //     demo: '',
    //     image: realEstate,
    // },
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