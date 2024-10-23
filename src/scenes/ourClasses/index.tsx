import { SelectedPage, ClassType } from "@/shared/types";
import image0 from "@/assets/image0.jpg";
// import image1 from "@/assets/image1.png";
// import image2 from "@/assets/image2.png";
// import image3 from "@/assets/image3.png";
// import image4 from "@/assets/image4.png";
// import image5 from "@/assets/image5.png";
// import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description:
            "Build strength and muscle with our comprehensive weight training sessions, perfect for both beginners and advanced lifters.",
        image: image0,
    },
    {
        name: "Yoga Classes",
        image: image0,
    },
    {
        name: "Ab Core Classes",
        description:
            "Relax, stretch, and strengthen your body with our yoga classes, designed to increase flexibility and mindfulness.",
        image: image0,
    },
    {
        name: "Adventure Classes",
        description:
            "Focus on your core with our intense ab and core workouts that help tone and strengthen your midsection.",
        image: image0,
    },
    {
        name: "Fitness Classes",
        description:
            "Stay fit with our general fitness classes that incorporate cardio, strength, and endurance training to keep you in top shape.",
        image: image0,
    },
    {
        name: "Training Classes",
        description:
            "Our expert-led training sessions are crafted to help you reach your personal fitness milestones with structured and engaging workouts.",
        image: image0,
    },
];

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
    return (
        <section id="ourclasses" className="w-full bg-primary-100 py-40">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
            >
                <motion.div
                    className="mx-auto w-5/6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div className="md:w-3/5">
                        <HText>OUR CLASSES</HText>
                        <p className="py-5">
                            Find the perfect class for you! We offer a range of
                            fitness experiences tailored to different interests
                            and levels. Whether you're looking to tone up, build
                            muscle, or simply stay active, we’ve got something
                            for you:
                        </p>
                    </div>
                </motion.div>
                <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                    <ul className="w-[2800px] whitespace-nowrap">
                        {classes.map((item: ClassType, index) => (
                            <Class
                                key={`${item.name}-${index}`}
                                name={item.name}
                                description={item.description}
                                image={item.image}
                            />
                        ))}
                    </ul>
                </div>
            </motion.div>
        </section>
    );
};

export default OurClasses;
