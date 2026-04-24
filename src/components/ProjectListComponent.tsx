import { FaExternalLinkAlt } from "react-icons/fa";

type PropsType = {
    title: string;
    description: string[];
    url?: string;
};

const ProjectListComponent = ({ title, description, url }: PropsType) => {
    return (
        <div
            data-aos="fade-right"
            className={`flex flex-col md:flex-row w-full items-center`}
        >
            <div className="flex flex-col mt-2 md:mt-0 gap-1.5">
                <div
                    className={`text-[#CCD6F6] text-lg text-center md:text-left flex items-center gap-4`}
                >
                    {title}{" "}
                    {url && (
                        <span className="text-white">
                            <a href={url} target="_blank">
                                <FaExternalLinkAlt />
                            </a>
                        </span>
                    )}
                </div>
                <div
                    className={`bg-[#7501e933] backdrop-blur-xl rounded-xl w-full text-white text-[13px] p-5 text-left flex items-center`}
                >
                    <div className="flex-col">
                        {description.map((item, index) => (
                            <div key={index}>
                                <span className="me-1">-</span> {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectListComponent;
