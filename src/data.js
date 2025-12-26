import { GiPoisonBottle } from "react-icons/gi";
import { ImShield } from "react-icons/im";
import { FaUserDoctor,FaComputer } from "react-icons/fa6";
import { BsBuildingsFill } from "react-icons/bs";
import { AiFillDatabase,AiFillSecurityScan } from "react-icons/ai";
import { GrCloudComputer, GrVulnerability } from "react-icons/gr";
import { HiBugAnt,HiOutlineBugAnt } from "react-icons/hi2";
import { BiSupport } from "react-icons/bi";
import { BsFillDeviceHddFill } from "react-icons/bs";
import { FaBriefcase } from "react-icons/fa";



export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
    // {
    //     name: "Blog",
    //     path: '/Blog'
    // },
    // {
    //     name: "Products",
    //     path: '/Products'
    // },
    {
        name: "Services",
        path: '/services'
    },
    // {
    //     name: "Solutions",
    //     path: '/solutions'
    // }
    {
        name: "Contact",
        path: '/contact'
    },
]







export const programs = [
    {
        id: 1,
        icon: < GiPoisonBottle />,
        title: "Threats",
        info: "Possible danger to your system or data.",
        path: '/threats'
    },
    {
        id: 2,
        icon: <HiOutlineBugAnt/>,
        title: "Vulnerabilities",
        info: "Weakness that can be attacked",
        path: "/vulnerabilities"
    },
    {
        id: 3,
        icon: <ImShield/>,
        title: "Defensive Measures",
        info: "Protection methods to keep systems safe from cyber threats.",
        path: "defensive-measures"
    },
    {
        id: 4,
        icon: <FaUserDoctor/>,
        title: "Roles & Protocols",
        info: "People protecting systems. Protocols rules that keep data safe while it moves between systems",
        path: "roles-protocols"
    }
]



export const mainservice = [
    {
        id: 1,
        icon: < AiFillSecurityScan />,
        title: "Penetration Testing",
        info: "Ethical hacking done to find and fix security weaknesses before criminals can use them.",
        path: "/PenetrationTesting"
    },
    {
        id: 2,
        icon: <GrVulnerability/>,
        title: "Vulnerability Assessment",
        info: "Scanning systems to find weaknesses and improve security.",
        path: "/VulnerabilityAssessment"
    },
    {
        id: 3,
        icon: <BsFillDeviceHddFill/>,
        title: "Ransomware Data Recovery",
        info: "Safely getting back locked or lost files after a ransomware attack.",
        path: "/RansomwareDataRecovery"
    },
    {
        id: 4,
        icon: <HiBugAnt/>,
        title: "Malware Analysis",
        info: "Studying harmful software to understand and stop cyber attacks.",
        path: "/MalwareAnalysis"
    },
    {
        id: 5,
        icon: <BiSupport/>,
        title: "Technical Support",
        info: "The team that helps fix security and computer problems to keep systems safe.",
        path: "/TechnicalSupport"
    },
     {
        id: 6,
        icon: <FaBriefcase/>,
        title: "Other Service",
        info: "The team that helps fix security and computer problems to keep systems safe.",
        path: "/OtherService"
    }
]






export const values = [
    {
        id: 1,
        icon: <BsBuildingsFill/>,
        title: "Your Campus",
        desc: "Your organization’s local network area that must be protected from cyber threats.."
    },
    {
        id: 2,
        icon: <AiFillDatabase/>,
        title: "Data Centers",
        desc: "A secure place where data is stored, protected, and monitored against cyber threats."
    },
    {
        id: 3,
        icon: <FaComputer/>,
        title: "Critical Systems",
        desc: "The most important computers or networks that must always stay safe and running."
    },
    {
        id: 4,
        icon: <GrCloudComputer/>,
        title: "Cloud Infrastructure",
        desc: "Internet-based computers and storage, protected to keep data safe online.."
    }
]









export const faqs = [
    {
        id: 1,
        question: "IPinfosec?",
        answer: "CYBER SECURITY SERVICE"
    },
    {
        id: 2,
        question: "What is cybersecurity?",
        answer: "Cybersecurity is the practice of protecting computers, networks, and data from unauthorized access, attacks, or damage."
    },
    {
        id: 3,
        question: "Why is cybersecurity important?",
        answer: "It protects sensitive information, prevents financial losses, ensures privacy, and maintains trust in digital systems."
    },
    {
        id: 4,
        question: "What should I do if I suspect a cyber attack?",
        answer: "Disconnect from the internet, report the incident to your IT/security team, change passwords, and scan your system for malware."
    },
    {
        id: 5,
        question: "Who needs cybersecurity?",
        answer: "Everyone — individuals, small businesses, large organizations, and even governments — to protect data and digital assets."
    },
    {
        id: 6,
        question: "help?",
        answer: "IPinfosec."
    }
]








export const testimonials = [
    {
        id: 1,
        name: "Diana Ayi",
        quote: "IPinfosec quickly found risky security holes in our application and suggested us with good fix, Recommending these brilliant services.",
        job: "Student",
        avatar: require("./images/avatar1.jpg")
    },
    {
        id: 2,
        name: "Daniel Vinyo",
        quote: "Our old website was unsecure and not fully developed, team IPinfosec did great job in less time and done with our requirement.",
        job: "Software Egineer",
        avatar: require("./images/avatar2.jpg")
    },
    {
        id: 3,
        name: "Edem Quist",
        quote: "Quaerat hic praesentium consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
        job: "University Lecturer",
        avatar: require("./images/avatar3.jpg")
    },
    {
        id: 4,
        name: "Grace Lavoe",
        quote: "Cupiditate deleniti sint consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
        job: "Talking Parrot",
        avatar: require("./images/avatar4.jpg")
    },
    {
        id: 5,
        name: "Nana Yaa Dankwa",
        quote: "Maxime minima cumque sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.",
        job: "Pharmacist",
        avatar: require("./images/avatar5.jpg")
    }
]







export const services = [
    {
        id: 1,
        name: 'Silver Package',
        desc: 'This package is perfect for beginners who need constant help',
        price: 29.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: false},
            {feature: 'Sixth Feature', available: false},
            {feature: 'Seventh Feature', available: false},
            {feature: 'Seventh Feature Plus', available: false},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ],
         path: "/TechnicalSupport"
    },
    {
        id: 2,
        name: 'Gold Package',
        desc: 'This is the perfect package for beginners who know what their doing',
        price: 49.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ],
         path: "/TechnicalSupport"
    },
    {
        id: 3,
        name: 'Platinum Package',
        desc: 'This package is perfect for busy people who need home service',
        price: 89.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eighth Feature', available: true},
            {feature: 'Ninth Feature', available: true},
            {feature: 'Tenth Feature', available: true},
            {feature: 'Eleventh Feature', available: true}
        ],
         path: "/TechnicalSupport"
    }
]









// const Trainer1 = require('./images/trainer1.jpg')
// const Trainer2 = require('./images/trainer2.jpg')
// const Trainer3 = require('./images/trainer3.jpg')
// const Trainer4 = require('./images/trainer4.jpg')
// const Trainer5 = require('./images/trainer5.jpg')
// const Trainer6 = require('./images/trainer6.jpg')


// export const products = [
//     {
//         id: 1,
//         image: Trainer1,
//         name: 'John Doe',
//         job: 'Aerobic Trainer',
//         socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
//     },
//     {
//         id: 2,
//         image: Trainer2,
//         name: 'Daniel vinyo',
//         job: 'Speed Trainer',
//         socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
//     },
//     {
//         id: 3,
//         image: Trainer3,
//         name: 'Edem Quist',
//         job: 'Flexibility Trainer',
//         socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
//     },
//     {
//         id: 4,
//         image: Trainer4,
//         name: 'Shatta Wale',
//         job: 'Body Composition Trainer',
//         socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
//     },
//     {
//         id: 5,
//         image: Trainer5,
//         name: 'Diana Ayi',
//         job: 'Circuit Trainer',
//         socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
//     },
//     {
//         id: 6,
//         image: Trainer6,
//         name: 'Wayne Carter',
//         job: 'Physical Intelligence Trainer',
//         socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
//     }
// ]