import Logo from "@/assets/Logo.png";
import Link from "../navbar/Link";
import { SelectedPage } from "@/shared/types";

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};
const Footer = ({ selectedPage, setSelectedPage }: Props) => {
    return (
        <footer className="bg-primary-100 py-16">
            <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
                <div className="mt-16 basis-1/2 md:mt-0">
                    <img alt="logo" src={Logo} />
                    <p className="my-5">
                        Tiger Gym offers world-class fitness programs, top-notch
                        trainers, and state-of-the-art facilities designed to
                        help you achieve your dream body. Whether you're a
                        beginner or a fitness pro, we have the tools and
                        community to help you thrive.
                    </p>
                    <p> © 2024 Tiger Gym. All Rights Reserved.</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Links</h4>
                    <div
                        className={`flex flex-col justify-between  gap-8 text-sm my-5`}
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
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Contact Us</h4>
                    <p className="my-5">TIGER GYM, Nawababad Wah Cantt</p>
                    <p>(+92)-316-9036533</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
