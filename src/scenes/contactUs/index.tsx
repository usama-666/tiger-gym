"use client";
import { useForm } from "react-hook-form";
import { EnvVariable, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.jpeg";
import HText from "@/shared/HText";
// import emailjs from "@emailjs/browser";
import { useRef } from "react";
import axios from "axios";

type FormData = {
    name: string;
    email: string; //from email
    number: string;
    message: string;
};

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};
// Access environment variables as an object using the EnvVariable type
const envVariables: EnvVariable = {
    VITE_EMAIL_SERVICE_ID: import.meta.env.VITE_EMAIL_SERVICE_ID!,
    VITE_EMAIL_TEMPLATE_ID: import.meta.env.VITE_EMAIL_TEMPLATE_ID!,
    VITE_EMAIL_PUBLIC_KEY: import.meta.env.VITE_EMAIL_PUBLIC_KEY!,
    VITE_BACKEND_URL: import.meta.env.VITE_BACKEND_URL!,
};

const ContactUs = ({ setSelectedPage }: Props) => {
    const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-black text-black outline-none`;

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>();

    const form = useRef<HTMLFormElement>(null);

    const onSubmit = async (data: FormData) => {
        console.log(data);
        // try {
        //     if (form.current) {
        //         await emailjs
        //             .sendForm(
        //                 envVariables.VITE_EMAIL_SERVICE_ID, // EmailJS service ID from envVariables
        //                 envVariables.VITE_EMAIL_TEMPLATE_ID, // EmailJS template ID from envVariables
        //                 form.current, // Use the form ref
        //                 envVariables.VITE_EMAIL_PUBLIC_KEY // Public key for EmailJS
        //             )
        //             .then(() => {
        //                 reset();
        //             });
        //         console.log("Email sent successfully!");
        //     } else {
        //         console.error("Form reference is null.");
        //     }
        //     console.log("Email sent successfully!");
        // } catch (error) {
        //     console.error("Failed to send email:", error);
        // }

        try {
            const res = await axios.post(
                `${envVariables.VITE_BACKEND_URL}api/send-mail`,
                {
                    name: data.name,
                    email: data.email,
                    number: data.number,
                    message: data.message,

                    // data: data,
                }
            );

            console.log(res);

            reset();
        } catch (error) {
            console.error("Failed to send email:", error);
        }
    };

    return (
        <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32 ">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
            >
                {/* HEADER */}
                <motion.div
                    className="md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <HText>
                        <span className="text-primary-500">JOIN NOW</span> TO
                        GET IN SHAPE
                    </HText>
                    <p className="my-5">
                        Ready to make the change? Join Tiger Gym today and
                        embark on your fitness journey with us. Fill out the
                        form below, and we’ll get back to you to help you get
                        started!
                    </p>
                </motion.div>

                {/* FORM AND IMAGE */}
                <div className="mt-10 justify-between gap-8 md:flex">
                    <motion.div
                        className="mt-10 basis-3/5 md:mt-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                            <input
                                className={inputStyles}
                                type="text"
                                placeholder="NAME"
                                {...register("name", {
                                    required: true,
                                    maxLength: 100,
                                })}
                            />
                            {errors.name && (
                                <p className="mt-1 text-primary-500">
                                    {errors.name.type === "required" &&
                                        "This field is required."}
                                    {errors.name.type === "maxLength" &&
                                        "Max length is 100 char."}
                                </p>
                            )}

                            <input
                                className={inputStyles}
                                type="text"
                                placeholder="EMAIL"
                                {...register("email", {
                                    required: true,
                                    pattern:
                                        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                })}
                            />
                            {errors.email && (
                                <p className="mt-1 text-primary-500">
                                    {errors.email.type === "required" &&
                                        "This field is required."}
                                    {errors.email.type === "pattern" &&
                                        "Invalid email address."}
                                </p>
                            )}

                            <input
                                className={inputStyles}
                                type="text"
                                placeholder="PHONE NO"
                                maxLength={13}
                                {...register("number", {
                                    required: true,
                                    pattern: /^[0-9]+$/, // Corrected regex for phone numbers
                                    maxLength: 11,
                                })}
                            />
                            {errors.number && (
                                <p className="mt-1 text-primary-500">
                                    {errors.number.type === "required" &&
                                        "This field is required."}
                                    {errors.number.type === "pattern" &&
                                        "Invalid Phone Number."}
                                </p>
                            )}

                            <textarea
                                className={inputStyles}
                                placeholder="MESSAGE"
                                rows={4}
                                cols={50}
                                {...register("message", {
                                    required: true,
                                    maxLength: 2000,
                                })}
                            />
                            {errors.message && (
                                <p className="mt-1 text-primary-500">
                                    {errors.message.type === "required" &&
                                        "This field is required."}
                                    {errors.message.type === "maxLength" &&
                                        "Max length is 2000 char."}
                                </p>
                            )}

                            <button
                                type="submit"
                                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
                            >
                                SUBMIT
                            </button>
                        </form>
                    </motion.div>

                    <motion.div
                        className="relative mt-16 basis-2/5 md:mt-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
                            <img
                                className="w-full rounded-lg"
                                alt="contact-us-page-graphic"
                                src={ContactUsPageGraphic}
                            />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default ContactUs;
