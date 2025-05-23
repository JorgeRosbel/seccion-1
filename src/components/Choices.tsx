import { Link } from "react-router-dom"


export const Choices:React.FC = () => {

    return (
        <section className="flex gap-3">
            <Link to="/user-list">
                <button className="w-[400px] h-[200px] rounded bg-black/85 text-white font-semibold text-3xl cursor-pointer">Ver lista de usuarios ordenada</button>
            </Link>

            <Link to="/form">
                <button className="w-[400px] h-[200px] rounded bg-black/85 text-white font-semibold text-3xl cursor-pointer">Ver Formulario</button>
            </Link>
            
        </section>
    )
}