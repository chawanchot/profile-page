type PropsType = {
    title: string;
    description: string;
    image: string;
    position?: "left" | "right"
}

const ProjectListComponent = ({ title, description, image, position="left" }: PropsType) => {

    return (
        <div
            data-aos="fade-right"
            className={`flex flex-col ${position === "left" ? "md:flex-row" : "md:flex-row-reverse"} w-full items-center`}
        >
            <img
                src={image}
                className="w-96 h-fit rounded-lg"
            />
            <div className="flex flex-col mt-2 md:mt-0 gap-2">
                <div className={`text-[#CCD6F6] text-lg text-center ${position === "left" ? "md:text-right" : "md:text-left"}`}>
                    {title}
                </div>
                <div className={`bg-[#7501e933] backdrop-blur-xl ${position === "left" ? "md:-ms-16" : "md:-me-16"} rounded-xl w-80 text-white text-xs p-5 text-left flex items-center`}>
                    {description}
                </div>
            </div>
        </div>
    );
};

export default ProjectListComponent;
