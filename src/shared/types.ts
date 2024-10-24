export enum SelectedPage {
    Home = "home",
    Benefits = "benefits",
    OurClasses = "ourclasses",
    ContactUs = "contactus",
}

export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
}

export interface ClassType {
    name: string;
    description?: string;
    image: string;
}

export type EnvVariable = {
    VITE_EMAIL_SERVICE_ID: string;
    VITE_EMAIL_TEMPLATE_ID: string;
    VITE_EMAIL_PUBLIC_KEY: string;
    VITE_BACKEND_URL: string;
};
