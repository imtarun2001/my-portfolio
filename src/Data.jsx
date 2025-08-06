import { FaReact,FaNode,FaHtml5,FaCss3Alt,FaDatabase,FaGitAlt,FaGithub, FaFigma, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiRedux,SiExpress,SiAxios,SiLoopback,SiMongodb,SiGithubcopilot, SiPostman, SiReactquery, SiTypescript } from "react-icons/si";
import { RiTailwindCssFill,RiGeminiFill,RiTeamFill } from "react-icons/ri";
import { GiArtificialIntelligence,GiSwordClash } from "react-icons/gi";
import { IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import { FcEngineering,FcClock } from "react-icons/fc";
import { VscRepoFetch } from "react-icons/vsc";
import { GoVersions } from "react-icons/go";
import { DiResponsive } from "react-icons/di";
import { LuGitPullRequestCreateArrow } from "react-icons/lu";
import { BiLogoVisualStudio } from "react-icons/bi";
import ForeverUi from './assets/foreverUi.png'
import StudyNotionUi from './assets/studynotionUi.png'
import FitnessClubUi from './assets/fitnessclubUi.png'
import ShoppyUi from './assets/shoppyUi.png'
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

export const myProjects = [
    {
        projectTitle: "Forever",
        uiUrl: "https://forever-frontend-eight-xi.vercel.app/",
        codeUrl: "https://github.com/imtarun2001/forever-frontend",
        ui: ForeverUi,
    },
    {
        projectTitle: "Studynotion",
        uiUrl: "https://studynotion-seven-sand.vercel.app/",
        codeUrl: "https://github.com/imtarun2001/studynotion",
        ui: StudyNotionUi,
    },
    {
        projectTitle: "Fitness Club",
        uiUrl: "https://fitness-club-taruns-projects-67c133f6.vercel.app/",
        codeUrl: "https://github.com/imtarun2001/fitness-club",
        ui: FitnessClubUi,
    },
    {
        projectTitle: "Shoppy",
        uiUrl: "https://shoppy-taruns-projects-67c133f6.vercel.app/",
        codeUrl: "https://github.com/imtarun2001/shoppy",
        ui: ShoppyUi,
    },
];

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
                skill: 'React Query',
                icon: <SiReactquery/>,
                color: 'darkcyan'
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
                color: 'darkgreen'
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
        skillCategory: "Web Technologies",
        skills: [
            {
                skill: 'Html5',
                icon: <FaHtml5/>,
                color: 'coral'
            },
            {
                skill: 'Css3',
                icon: <FaCss3Alt/>,
                color: 'deepskyblue'
            },
            {
                skill: 'Tailwind',
                icon: <RiTailwindCssFill/>,
                color: 'aqua'
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
            },
            {
                skill: 'TypeScript',
                icon: <SiTypescript/>,
                color: 'royalblue'
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
                color: 'black'
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
                color: 'rgb(0, 179, 90)'
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
        skillCategory: "UI/UX Design",
        skills: [
            {
                skill: 'Figma',
                icon: <FaFigma/>,
                color: 'mediumvioletred'
            }
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
                color: 'purple'
            },
            {
                skill: 'Time Management',
                icon: <FcClock/>,
                color: 'darkcyan'
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


export const myEducation = {
    instituteName: "Kalinga Institute of Industrial Technology (KIIT)",
    instituteLogo: KiitLogo,
    instituteImage: KiitImage,
    degree: "Post Graduation (Master of Computer Applications)",
    cgpa: "7.95 / 10",
    duration: "October 2022 - April 2024",
    location: "Bhubaneshwar, Odisha"
};

export const myDigitalAccounts = [
    {
        platform: "GitHub",
        url: "https://github.com/imtarun2001/",
        logo: <FaGithub/>
    },
    {
        platform: "Vercel",
        url: "https://vercel.com/taruns-projects-67c133f6",
        logo: <IoLogoVercel/>
    },
    {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/tarun-kumar-behera-228b3b242/",
        logo: <FaLinkedin/>
    },
    {
        platform: "X",
        url: "https://x.com/Tarunkb2001",
        logo: <FaXTwitter/>
    },
];
