import ME_IMAGE from "@assets/Me2.png";
import ARROW_IMAGE from "@assets/Arrow.png";
import { Popover, Timeline } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { DiscordFilled, GoogleOutlined, MenuOutlined } from "@ant-design/icons";
import ProjectListComponent from "@components/ProjectListComponent";
import SkillsBoxComponent from "@components/SkillsBoxComponent";
import MobileMenuComponent from "@components/MobileMenuComponent";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type WorkshopType = {
    title: string;
    description: string[];
    url?: string;
};

type SkillsType = {
    title: string;
    data: string[];
};

const WORKSHOP_DATA: WorkshopType[] = [
    {
        title: "ONE GEO SURVEY Co., Ltd. - Frontend Developer Intern (4 Months)",
        description: [
            "Trained in the company's Tech Stack for development applications.",
            "Developed UI Components for internal company projects using React and TypeScript, following designs from the UX/UI team.",
            "Connected data with RESTful API according to documentation to manage data between Frontend and Backend.",
            "Developed projects collaboratively using Git for code version control.",
        ],
    },
    {
        title: "INTERNSHIP PROJECT - Website for displaying agricultural statistics and soil quality",
        description: [
            "Developed an Interactive Map for displaying agricultural statistics using MapLibre and Google Maps API to show product buying locations.",
            "Integrated GeoJSON soil quality data onto the map for data analysis.",
        ],
        url: "https://agri-stats.chawanchot.me/"
    },
    {
        title: "SENIOR PROJECT - Application for finding friends to do activities",
        description: [
            "Developed a mobile application using React Native and Firebase, supporting activity filtering by sub-district, district, and province.",
            "Developed a Social Authentication system via Facebook and Google platforms using Firebase Authentication.",
        ],
    },
];

const SKILLS_DATA: SkillsType[] = [
    {
        title: "Languages",
        data: ["Javascript", "Typescript", "Go"],
    },
    {
        title: "Other",
        data: ["HTML", "CSS", "MySQL"],
    },
    {
        title: "Tools",
        data: ["VSCode", "Git", "DBeaver", "Bruno", "Postman"],
    },
    {
        title: "Frameworks",
        data: ["React", "TailwindCSS", "AntDesign", "Node.js", "Express.js"],
    },
];

const App = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="min-h-screen bg-[#11071F] overflow-hidden" id="main">
            {/* NAV */}
            <div className="bg-[#1A0B2E] h-16 px-[5%] lg:px-[10%] xl:px-[20%] w-full flex justify-between items-center fixed top-0 left-0 z-20">
                <div className="text-white flex">
                    <a href="#main">PORTFOLIO</a>
                </div>
                <div className="cursor-pointer flex sm:hidden">
                    <MenuOutlined
                        onClick={() => setShowMenu(true)}
                        className="text-white! text-lg"
                    />
                </div>
                <ul className="text-white font-light hidden sm:flex gap-12 text-sm">
                    <li className="cursor-pointer hover:text-shadow-white hover:text-shadow-xs">
                        <a href="#about">About</a>
                    </li>
                    <li className="cursor-pointer hover:text-shadow-white hover:text-shadow-xs">
                        <a href="#education">Education</a>
                    </li>
                    <li className="cursor-pointer hover:text-shadow-white hover:text-shadow-xs">
                        <a href="#skills">Skills</a>
                    </li>
                    <li className="cursor-pointer hover:text-shadow-white hover:text-shadow-xs">
                        <a href="#contacts">Contacts</a>
                    </li>
                </ul>
            </div>

            {/* MOBILE MENU */}
            <MobileMenuComponent
                status={showMenu}
                close={() => setShowMenu(false)}
            />

            <div className="px-[5%] lg:px-[10%] xl:px-[20%] pt-20 sm:pt-44 pb-20">
                <div className="w-full relative flex gap-2 sm:gap-7">
                    <img
                        src={ME_IMAGE}
                        className="w-20 sm:w-28 lg:w-36 custom-drop-shadow rounded-2xl"
                    />
                    <div className="hidden absolute -top-24 sm:-right-16 lg:-right-28 sm:flex text-white w-full animate-custom-bounce">
                        <img src={ARROW_IMAGE} />
                        <div className="pt-6 text-base font-light">
                            Hello! I'm{" "}
                            <span className="text-[#7127BA]">
                                Chawanchot Khamdee
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col mt-7">
                        <div className="text-white text-[16px] sm:text-2xl md:text-3xl lg:text-4xl overflow-hidden whitespace-nowrap border-r-2 animate-typewriter">
                            I'm a New Computer Science Graduate.
                        </div>
                        <div className="text-white text-xs lg:text-sm">
                            Currently seeking exciting opportunities in{" "}
                            <span className="text-[#7127BA]">
                                Software Developer
                            </span>
                        </div>
                    </div>
                </div>

                <div className="text-white mt-8 md:mt-12 flex text-2xl" id="about">
                    <span className="text-[#7127BA]">#</span>about-me
                    <span className="border-t-2 border-[#7127BA] ms-2 w-40 mt-4.5"></span>
                </div>
                <div
                    data-aos="fade-right"
                    className="text-white text-xs lg:text-sm font-light mt-4"
                >
                    A Computer Science fresh graduate with skills in Frontend
                    Development using React and TypeScript. <br />
                    Experienced in developing UI Components and API integration
                    during internship. <br />
                    Eager to learn new technologies to create efficient work for
                    the organization.
                </div>

                <div className="text-white mt-10 flex text-2xl" id="education">
                    <span className="text-[#7127BA]">#</span>education
                    <span className="border-t-2 border-[#7127BA] ms-2 w-40 mt-4.5"></span>
                </div>
                <Timeline
                    data-aos="fade-in"
                    classNames={{
                        root: "mt-4!",
                        itemContent: "text-white!",
                        itemTitle: "text-white!",
                        itemRail: "bg-[#7127BA] shadow-2xl",
                        itemIcon: "bg-white",
                    }}
                    items={[
                        {
                            title: "2022 - 2026",
                            content: (
                                <div className="flex flex-col">
                                    Computer Science <span>GPAX 3.28</span>
                                    <span className="text-[#7127BA]">
                                        Loei Rajabhat University
                                    </span>
                                </div>
                            ),
                        },
                        {
                            title: "2018 - 2021",
                            content: (
                                <div className="flex flex-col">
                                    Information Technology{" "}
                                    <span className="text-[#7127BA]">
                                        Loei Technical College
                                    </span>
                                </div>
                            ),
                        },
                    ]}
                />

                <div className="text-white flex text-2xl mt-6" id="skills">
                    <span className="text-[#7127BA]">#</span>skills
                    <span className="border-t-2 border-[#7127BA] ms-2 w-56 mt-4.5"></span>
                </div>
                <div
                    data-aos="flip-up"
                    className="grid grid-cols-2 md:grid-cols-4 justify-center gap-3 mt-4 px-10"
                >
                    {SKILLS_DATA.map((item, index) => (
                        <SkillsBoxComponent
                            key={index}
                            title={item.title}
                            data={item.data}
                        />
                    ))}
                </div>

                <div className="text-white flex text-2xl mt-10" id="projects">
                    <span className="text-[#7127BA]">#</span>
                    work-experience-and-projects
                    <span className="border-t-2 border-[#7127BA] ms-2 w-40 mt-4.5"></span>
                </div>
                <div className="flex flex-col gap-7 mt-4 overflow-hidden">
                    {WORKSHOP_DATA.map((item, index) => (
                        <ProjectListComponent
                            key={index}
                            title={item.title}
                            description={item.description}
                            url={item.url}
                        />
                    ))}
                </div>

                <div className="text-white flex text-2xl mt-10" id="contacts">
                    <span className="text-[#7127BA]">#</span>contacts
                    <span className="border-t-2 border-[#7127BA] ms-2 w-40 mt-4.5"></span>
                </div>
                <div data-aos="fade-right" className="mt-4 flex flex-col gap-2">
                    <div className="flex items-center gap-1">
                        <Popover
                            content="Github"
                            classNames={{
                                container: "px-2! py-1! rounded!",
                                content: "text-xs",
                            }}
                        >
                            <FaGithub className="text-[#7127BA]! text-2xl" />
                        </Popover>
                        <span className="text-white text-sm">@chawanchot</span>
                        <a href="https://github.com/chawanchot" target="_blank">
                            <FaExternalLinkAlt className="text-white ms-1 text-xs" />
                        </a>
                    </div>
                    <div className="flex items-center gap-1">
                        <Popover
                            content="Email"
                            classNames={{
                                container: "px-2! py-1! rounded!",
                                content: "text-xs",
                            }}
                        >
                            <GoogleOutlined className="text-[#7127BA]! text-2xl" />
                        </Popover>
                        <span className="text-white text-sm">
                            chawanchot.dev@gmail.com
                        </span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Popover
                            content="Discord"
                            classNames={{
                                container: "px-2! py-1! rounded!",
                                content: "text-xs",
                            }}
                        >
                            <DiscordFilled className="text-[#7127BA]! text-2xl" />
                        </Popover>
                        <span className="text-white text-sm">@toy.drm</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
