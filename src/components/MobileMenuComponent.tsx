type PropsType = {
    status: boolean;
    close: () => void;
};

const MobileMenuComponent = ({ status = false, close }: PropsType) => {
    return (
        <>
            {status && (
                <div className="fixed top-0 left-0 z-40 bg-[#000000cb] w-full h-full flex sm:hidden justify-center items-center">
                    <div
                        onClick={() => close()}
                        className="absolute right-10 top-10 text-white text-2xl"
                    >
                        X
                    </div>
                    <ul className="text-white flex flex-col gap-2 text-5xl">
                        <li className="cursor-pointer">
                            <a href="#about" onClick={() => close()}>
                                About
                            </a>
                        </li>
                        <li className="cursor-pointer">
                            <a href="#education" onClick={() => close()}>
                                Education
                            </a>
                        </li>
                        <li className="cursor-pointer">
                            <a href="#skills" onClick={() => close()}>
                                Skills
                            </a>
                        </li>
                        <li className="cursor-pointer">
                            <a href="#projects" onClick={() => close()}>
                                Projects
                            </a>
                        </li>
                        <li className="cursor-pointer">
                            <a href="#contacts" onClick={() => close()}>
                                Contacts
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
};

export default MobileMenuComponent;
