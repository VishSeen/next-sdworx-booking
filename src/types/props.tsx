import { Inputs } from "./type";

export type UserPanelProps = {
    username?: string;
    teamName?: string;
    profilePic?: string;
}


export type SideItem = {
    title: string;
    icon?: string;
    href: string;
}

export type FormInputProps = {
    inputs: Inputs;
    handleChange?: (e: any) => void;
}