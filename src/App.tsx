import ME_IMAGE from "@assets/Me.png";
import ARROW_IMAGE from "@assets/Arrow.png";
import ROUTER_WORKSHOP_IMAGE from "@assets/workshopRounter.png";
import STYLE_WORKSHOP_IMAGE from "@assets/workshopStyle.png";
import TODOLIST_WORKSHOP_IMAGE from "@assets/workshopTodoList.png";
import CHECKLIST_WORKSHOP_IMAGE from "@assets/workshopChecklist.png";
import USER_WORKSHOP_IMAGE from "@assets/workshopRTK.png";
import ACTIVITY_PROJECT_IMAGE from "@assets/projectActivity.png";
import { Popover, Timeline } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import {
    DiscordFilled,
    GitlabFilled,
    GoogleOutlined,
    MenuOutlined,
} from "@ant-design/icons";
import ProjectListComponent from "@components/ProjectListComponent";
import SkillsBoxComponent from "@components/SkillsBoxComponent";
import MobileMenuComponent from "@components/MobileMenuComponent";

type WorkshopType = {
    title: string;
    description: string;
    image: string;
};

type SkillsType = {
    title: string;
    data: string[];
};

const WORKSHOP_DATA: WorkshopType[] = [
    {
        title: "React Router Application",
        description:
            "A simple React application created to practice routing concepts using React Router. The project focuses on page navigation, layout structure, and component rendering based on routes.",
        image: ROUTER_WORKSHOP_IMAGE,
    },
    {
        title: "Tailwind & Ant Design",
        description:
            "An extended version of the React Router project, enhanced with Tailwind CSS and Ant Design. The application focuses on responsive design, UI styling, and improved user experience across different screen sizes.",
        image: STYLE_WORKSHOP_IMAGE,
    },
    {
        title: "Todo List Application",
        description:
            "A simple web application created to practice React components, state, and props. Users can add, edit, and delete tasks with real-time UI updates.",
        image: TODOLIST_WORKSHOP_IMAGE,
    },
    {
        title: "Checklist Application",
        description:
            "An interactive React TypeScript application built to practice component-based architecture, state management, props usage, and logic handling through dynamic checklist interactions.",
        image: CHECKLIST_WORKSHOP_IMAGE,
    },
    {
        title: "User Management Application",
        description:
            "A React application that fetches and manages user data using RTK Query. The project supports viewing, adding, and deleting users with pagination.",
        image: USER_WORKSHOP_IMAGE,
    },
];

const SKILLS_DATA: SkillsType[] = [
    {
        title: "Languages",
        data: ["Javascript", "Typescript"],
    },
    {
        title: "Other",
        data: ["HTML", "CSS"],
    },
    {
        title: "Tools",
        data: ["VSCode", "Git", "GitLab"],
    },
    {
        title: "Frameworks",
        data: ["React", "Express.js", "TailwindCSS", "AntDesign"],
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
                    <a href="#main">PORTFOLIO V.2</a>
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
                        <a href="#projects">Projects</a>
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
                        className="w-20 sm:w-28 lg:w-44 custom-drop-shadow"
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
                        <div className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl overflow-hidden whitespace-nowrap border-r-2 animate-typewriter">
                            I'm a Computer Science student.
                        </div>
                        <div className="text-white text-xs lg:text-sm">
                            Currently, I'm an Intern at{" "}
                            <span className="text-[#7127BA]">
                                One Geo Survey
                            </span>
                        </div>
                    </div>
                </div>

                <div className="text-white mt-12 flex text-2xl" id="about">
                    <span className="text-[#7127BA]">#</span>about-me
                    <span className="border-t-2 border-[#7127BA] ms-2 w-40 mt-4.5"></span>
                </div>
                <div
                    data-aos="fade-right"
                    className="text-white text-xs lg:text-sm font-light mt-4"
                >
                    I'm a fourth-year Computer Science student who enjoys
                    building things for the web. <br />
                    As a Frontend Developer Intern, I like creating clean UI and
                    improving user experience. <br />
                    I'm always excited to learn new technologies and grow as a
                    developer.
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
                            title: "2018",
                            content: (
                                <div className="flex flex-col">
                                    Information Technology{" "}
                                    <span className="text-[#7127BA]">
                                        Loei Technical College
                                    </span>
                                </div>
                            ),
                        },
                        {
                            title: "2022 - NOW",
                            content: (
                                <div className="flex flex-col">
                                    Computer Science{" "}
                                    <span className="text-[#7127BA]">
                                        Loei Rajabhat University
                                    </span>
                                </div>
                            ),
                            loading: true,
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
                    <span className="text-[#7127BA]">#</span>practice-projects
                    <span className="border-t-2 border-[#7127BA] ms-2 w-40 mt-4.5"></span>
                </div>
                <div className="flex flex-col gap-7 mt-4 overflow-hidden">
                    {WORKSHOP_DATA.map((item, index) => (
                        <ProjectListComponent
                            key={index}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                            position={index % 2 === 0 ? "left" : "right"}
                        />
                    ))}
                </div>

                <div className="text-white flex text-2xl mt-10">
                    <span className="text-[#7127BA]">#</span>projects
                    <span className="border-t-2 border-[#7127BA] ms-2 w-40 mt-4.5"></span>
                </div>
                <div
                    data-aos="zoom-in"
                    className="flex flex-col w-full items-center mt-4"
                >
                    <img
                        src={ACTIVITY_PROJECT_IMAGE}
                        className="h-80 rounded-lg"
                    />
                    <div className="flex flex-col mt-2 gap-2">
                        <div className="text-[#CCD6F6] text-lg text-center">
                            ActivityMate Application
                        </div>
                        <div className="bg-[#7501e933] backdrop-blur-xl rounded-xl w-96 text-white text-xs p-5 text-center flex items-center">
                            A mobile application built with React Native and
                            Firebase for finding friends to join activities. The
                            app supports Google and Facebook authentication,
                            activity location selection using Google Places API,
                            and group chat functionality.
                        </div>
                    </div>
                </div>

                <div className="text-white flex text-2xl mt-10" id="contacts">
                    <span className="text-[#7127BA]">#</span>contacts
                    <span className="border-t-2 border-[#7127BA] ms-2 w-40 mt-4.5"></span>
                </div>
                <div data-aos="fade-right" className="mt-4 flex flex-col gap-2">
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
                            chawanchotit@gmail.com
                        </span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Popover
                            content="GitLab"
                            classNames={{
                                container: "px-2! py-1! rounded!",
                                content: "text-xs",
                            }}
                        >
                            <GitlabFilled className="text-[#7127BA]! text-2xl" />
                        </Popover>
                        <span className="text-white text-sm">
                            @toy.chawanchot
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
