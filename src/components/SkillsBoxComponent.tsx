type PropsType = {
    title: string;
    data: string[];
};

const SkillsBoxComponent = ({ title, data }: PropsType) => {
    return (
        <div className="border-2 border-[#7127BA] text-white rounded">
            <div className="border-b-2 border-[#7127BA] p-2 flex items-center">
                {title}
            </div>
            <div className="text-sm text-gray-300 font-light p-2 flex flex-wrap">
                {data.map((item, index) => (
                    <span key={index} className="me-1">{item}</span>
                ))}
            </div>
        </div>
    );
};

export default SkillsBoxComponent;
