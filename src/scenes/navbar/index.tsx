import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import ActionButton from "@/shared/ActionButton";

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
    const flexBetween = "flex justify-between items-center";
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const isAboveMediumScreens = useMediaQuery("(min-width:1050px)");

    const navbarBg = isTopOfPage ? "" : "bg-primary-100 drop-shadow";
    return (
        <nav>
            <div
                className={` ${navbarBg} ${flexBetween}  fixed top-0 z-30 w-full  border-2`}
            >
                <div className={`${flexBetween}   mx-auto w-5/6`}>
                    <div className={`${flexBetween} gap-16 w-full`}>
                        <img
                            src={Logo}
                            alt="logo"
                            className="w-[200px] h-full"
                        />

                        {isAboveMediumScreens ? (
                            <div className={`${flexBetween}  w-full `}>
                                {/* inner left side */}
                                <div
                                    className={`${flexBetween}  gap-8 text-sm`}
                                >
                                    <Link
                                        page="Home"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />

                                    <Link
                                        page="Benefits"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link
                                        page="Our Classes"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />

                                    <Link
                                        page=" Contact Us"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                </div>
                                {/* inner right side */}

                                <div className={`${flexBetween} gap-8`}>
                                    <p>Sign In</p>
                                    <ActionButton
                                        setSelectedPage={setSelectedPage}
                                    >
                                        Become a Member
                                    </ActionButton>
                                </div>
                            </div>
                        ) : (
                            <button
                                className="rounded-full bg-secondary-500 p-2"
                                onClick={() => setIsMenuToggled(!isMenuToggled)}
                            >
                                <Bars3Icon className="h-6 w-6 text-white" />
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile MEnu Monald*/}

            {!isAboveMediumScreens && isMenuToggled && (
                <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100  ">
                    {/* closw icon   */}
                    <div className="flex justify-end p-12">
                        <button
                            onClick={() => setIsMenuToggled(!isMenuToggled)}
                        >
                            <XMarkIcon className="h-6 w-6 text-gray-400" />
                        </button>
                    </div>

                    {/* menu itesm  */}
                    <div className={`ml-[33%] flex flex-col gap-10 text-2xl`}>
                        <Link
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />

                        <Link
                            page="Benefits"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Our Classes"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />

                        <Link
                            page=" Contact Us"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                </div>
            )}

            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
</svg> */}
        </nav>
    );
};

export default Navbar;
