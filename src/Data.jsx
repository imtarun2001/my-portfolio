import { FaReact,FaNode,FaHtml5,FaCss3Alt,FaDatabase,FaGitAlt,FaGithub } from "react-icons/fa";
import { SiRedux,SiExpress,SiAxios,SiLoopback,SiMongodb,SiGithubcopilot, SiPostman } from "react-icons/si";
import { RiTailwindCssFill,RiGeminiFill,RiTeamFill } from "react-icons/ri";
import { GiArtificialIntelligence,GiSwordClash } from "react-icons/gi";
import { IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import { FcEngineering,FcClock } from "react-icons/fc";
import { VscRepoFetch } from "react-icons/vsc";
import { GoVersions } from "react-icons/go";
import { DiResponsive } from "react-icons/di";
import { LuGitPullRequestCreateArrow } from "react-icons/lu";
import { BiLogoVisualStudio } from "react-icons/bi";
import StudyNotionUi from './assets/studynotionUi.png'
import FitnessClubUi from './assets/fitnessclubUi.png'
import ShoppyUi from './assets/shoppyUi.png'
import FlipzonUi from './assets/flipzonUi.png'
import TopCoursesUi from './assets/topcoursesUi.png'
import KiitLogo from './assets/kiit_logo.png'
import KiitImage from './assets/kiit_image.webp'

export const myDetails = {
    name: "Tarun Kumar Behera",
    dob: "31st October 2001",
    email: "tarunkumarbehera8249@gmail.com",
    phone: "+91 8249390690",
    address: "Cuttack, Odisha, 754025",
    summary: "having expertise in various JavaScript libraries and frameworks with strong communication and time management skills. Passionate about building scalable and dynamic web applications and eager to contribute to real-world projects in a collaborative team environment.",
    photo: "https://res.cloudinary.com/dfg3tlyvo/image/upload/v1749289789/portfolioNewDp_bg_removed_mqdh2e.png"
}

export const mySkills = [
    {
        skillCategory: "Libraries & Frameworks",
        skills: [
            {
                skill: 'React',
                icon: <FaReact/>,
                color: 'cyan'
            },
            {
                skill: 'Redux',
                icon: <SiRedux/>,
                color: 'violet'
            },
            {
                skill: 'Express',
                icon: <SiExpress/>,
                color: 'white'
            },
            {
                skill: 'Node.js',
                icon: <FaNode/>,
                color: 'lime'
            },
            {
                skill: 'Axios',
                icon: <SiAxios/>,
                color: 'gold'
            },
            {
                skill: 'Fetch',
                icon: <VscRepoFetch/>,
                color: 'red'
            }
        ]
    },
    {
        skillCategory: "Web technologies",
        skills: [
            {
                skill: 'Html',
                icon: <FaHtml5/>,
                color: 'coral'
            },
            {
                skill: 'Css',
                icon: <FaCss3Alt/>,
                color: 'mediumblue'
            },
            {
                skill: 'Tailwind',
                icon: <RiTailwindCssFill/>,
                color: 'aquamarine'
            }
        ]
    },
    {
        skillCategory: "Scripting Language",
        skills: [
            {
                skill: 'JavaScript',
                icon: <IoLogoJavascript/>,
                color: 'yellow'
            }
        ]
    },
    {
        skillCategory: "Concepts",
        skills: [
            {
                skill: 'Data Structures and Algorithms',
                icon: <FaDatabase/>,
                color: 'fuchsia'
            },
            {
                skill: 'Object Oriented Programming',
                icon: <SiLoopback/>,
                color: 'lightseagreen'
            },
            {
                skill: 'Software Engineering',
                icon: <FcEngineering/>,
                color: 'coral'
            },
            {
                skill: 'Git',
                icon: <FaGitAlt/>,
                color: 'red'
            },
            {
                skill: 'Responsive design',
                icon: <DiResponsive className="text-[2rem]"/>,
                color: 'white'
            },
            {
                skill: 'Version Control',
                icon: <GoVersions/>,
                color: 'steelblue'
            },
            {
                skill: 'CRUD operations with REST APIs (HTTP methods)',
                icon: <LuGitPullRequestCreateArrow/>,
                color: 'gold'
            }
        ]
    },
    {
        skillCategory: "Tools & Workbenches",
        skills: [
            {
                skill: 'MongoDB',
                icon: <SiMongodb/>,
                color: 'springgreen'
            },
            {
                skill: 'GitHub',
                icon: <FaGithub/>,
                color: 'white'
            },
            {
                skill: 'Vercel',
                icon: <IoLogoVercel/>,
                color: 'aliceblue'
            },
            {
                skill: 'Postman',
                icon: <SiPostman/>,
                color: 'coral'
            },
            {
                skill: 'VS Code',
                icon: <BiLogoVisualStudio/>,
                color: 'dodgerblue'
            },
        ]
    },
    {
        skillCategory: "AI Tools",
        skills: [
            {
                skill: 'ChatGPT',
                icon: <GiArtificialIntelligence/>,
                color: 'lightseagreen'
            },
            {
                skill: 'Gemini',
                icon: <RiGeminiFill/>,
                color: 'orchid'
            },
            {
                skill: 'Copilot',
                icon: <SiGithubcopilot/>,
                color: 'aliceblue'
            }
        ]
    },
    {
        skillCategory: "Soft Skills",
        skills: [
            {
                skill: 'Team Work',
                icon: <RiTeamFill/>,
                color: 'darkviolet'
            },
            {
                skill: 'Time Management',
                icon: <FcClock/>,
                color: 'turquoise'
            },
            {
                skill: 'Negotiation',
                icon: <GiSwordClash/>,
                color: 'red'
            }
        ]
    }
];

export const myCertificates = [
    {
        certificateOf: "REACT",
        certifiedBy: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/HackerRank_Icon-1000px.png/250px-HackerRank_Icon-1000px.png",
        certificateUrl: "https://res.cloudinary.com/dfg3tlyvo/image/upload/v1744357483/react_gejdko.png"
    },
    {
        certificateOf: "SAP ABAP",
        certifiedBy: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsUvj_R2egx600mreH9ZwCVuOU81Cun-041A&s",
        certificateUrl: "https://res.cloudinary.com/dfg3tlyvo/image/upload/v1744357477/sapabap_ucp7dl.png"
    },
    {
        certificateOf: "JAVASCRIPT",
        certifiedBy: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/HackerRank_Icon-1000px.png/250px-HackerRank_Icon-1000px.png",
        certificateUrl: "https://res.cloudinary.com/dfg3tlyvo/image/upload/v1744357511/javascript_njgrxm.png"
    },
    {
        certificateOf: "HTML",
        certifiedBy: "https://d1vwxdpzbgdqj.cloudfront.net/images/home_page/desk-gl-logo.png",
        certificateUrl: "https://res.cloudinary.com/dfg3tlyvo/image/upload/v1744357519/html_dshjy9.png"
    },
    {
        certificateOf: "CSS",
        certifiedBy: "https://d1vwxdpzbgdqj.cloudfront.net/images/home_page/desk-gl-logo.png",
        certificateUrl: "https://res.cloudinary.com/dfg3tlyvo/image/upload/v1744357530/css_slfc72.png"
    },
];

export const myProjects = [
    {
        projectTitle: "Studynotion",
        uiUrl: "https://studynotion-seven-sand.vercel.app/",
        codeUrl: "https://github.com/imtarun2001/studynotion",
        ui: StudyNotionUi,
        projectDescription: ""
    },
    {
        projectTitle: "Fitness Club",
        uiUrl: "https://fitness-club-taruns-projects-67c133f6.vercel.app/",
        codeUrl: "https://github.com/imtarun2001/fitness-club",
        ui: FitnessClubUi,
        projectDescription: ""
    },
    {
        projectTitle: "Shoppy",
        uiUrl: "https://shoppy-taruns-projects-67c133f6.vercel.app/",
        codeUrl: "https://github.com/imtarun2001/shoppy",
        ui: ShoppyUi,
        projectDescription: ""
    },
    {
        projectTitle: "Flipzon",
        uiUrl: "https://flipzon-6kukuqz61-taruns-projects-67c133f6.vercel.app/",
        codeUrl: "https://github.com/imtarun2001/flipzon",
        ui: FlipzonUi,
        projectDescription: ""
    },
    {
        projectTitle: "Top Courses",
        uiUrl: "https://imtarun2001.github.io/topcourses/",
        codeUrl: "https://github.com/imtarun2001/topcourses",
        ui: TopCoursesUi,
        projectDescription: ""
    },
    // {
    //     projectTitle: "Animals",
    //     uiUrl: "https://imtarun2001.github.io/animalscard/",
    //     codeUrl: "https://github.com/imtarun2001/animalscard",
    //     ui: AnimalsUi,
    //     projectDescription: ""
    // }
];

export const myEducation = {
    instituteName: "Kalinga Institute of Industrial Technology (KIIT)",
    instituteLogo: KiitLogo,
    instituteImage: KiitImage,
    degree: "Post Graduation (Master of Computer Applications)",
    cgpa: "7.95 / 10",
    duration: "October 2022 - April 2024",
    location: "Bhubaneshwar, Odisha"
};
