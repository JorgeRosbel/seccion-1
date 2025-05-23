import { type Customers } from "../types";
import { FaRegUserCircle } from "react-icons/fa";


/* 
Nota:
Evitar usar como key el index ya que si agregamos nuevos usuarios y organizamos
alfabéticamente estarían cambiando los index y react no podría identificar 
que elementos realmente han cambiado

No es necesario usar estado local (useState)
*/

export const UserList:React.FC<{data: Customers}> = ({data}) => {

    const sortUsers = [...data].sort((a,b) => a.name.localeCompare(b.name))

    return (
        <ol className=" text-black border rounded border-black/30  min-w-[200px] flex flex-col items-center justify-center">
            {sortUsers.map(user => <li key={user.id} className="flex even:bg-gray-200/30 py-2 px-4 odd:bg-gray-400/40  w-full items-center justify-start gap-2"><FaRegUserCircle />{user.name}</li>)}
        </ol>
    )
}