import { type InputProps, type IFormState } from "../types";
import React, { useState } from "react";

/**
 * 
 * @returns *formState*: estado del formulario
 * @returns *handleInputChange*: controlador para el cambio del los inputs
 * @returns *handleSubmit*: controlador para el submit del form
 * 
 * @example
 * ```ts
 *  const { formState,handleSubmit,handleInputChange } = useFormHandlers()
 */
const useFormHandlers = () => {

    const [formState, setFormState] = useState<IFormState>({ username: "", email: "", isSubmitted: false });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormState({ ...formState, isSubmitted: false, [name]: value })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(formState.username.length > 0 && formState.email.length > 0){
            setFormState({ ...formState, isSubmitted: true })
        }
       
        
    }

    return {
        formState,
        handleInputChange,
        handleSubmit
    }

}


const Input:React.FC<InputProps> = ({text, ...props}) => {

    return (
        <div className="flex flex-col w-full">
            <label className="text-[0.8rem] font-semibold text-black/60" htmlFor={text}>{text}</label>
            <input 
            required 
            className="bg-gray-200 text-center rounded p-1 outline-none transition-all duration-200 
            border-transparent border-[2px] focus:border-black" id={text}  {...props}/>
        </div>
    )
}

const ShownResults:React.FC<IFormState> = ({username,email,isSubmitted}) => {

    if(!isSubmitted) return null;

    return (
       <ul className="w-full border border-black/50 p-3 mt-6 opacity-65 min-h-[80px]">
            <li>{username}</li>
            <li>{email}</li>
       </ul>
    )
}


export const UserForm: React.FC = () => {

    const { formState,handleSubmit,handleInputChange } = useFormHandlers()

    return (
        <section className="flex flex-col items-center justify-center">
            <h1 className="font-semibold text-2xl">Test Form</h1>
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3 min-w-[300px]">

                <Input autoFocus text="Username" name="username" type="text" onChange={handleInputChange} value={formState.username} />
                <Input text="Email"  name="email" type="email" onChange={handleInputChange} value={formState.email} />
                <button className="bg-black text-white font-semibold w-full rounded py-2 mt-6 cursor-pointer active:opacity-75  transition-all duration-250">Enviar</button>
            </form>

            <ShownResults {...formState} isSubmitted={formState.isSubmitted} />
            
        </section>
    )
}