import type React from "react";

export interface IUser {
    name:string;
    age:number;
    id:string;
}

export type Customers = IUser[]

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    text:string;
    
}

export interface IFormState {
    username:string;
    email:string;
    isSubmitted:boolean;
}
