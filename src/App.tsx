import { UserList } from "#components/UserList.tsx";
import { UserForm } from "#components/UserForm.tsx";
import { Choices } from "#components/Choices.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const names = [
  "Victor Ramírez López",
  "Carlos Méndez Salazar",
  "Laura Gómez Ruiz",
  "María Rodríguez Peña",
  "Lucía Fernández Soto",
  "Ana Torres Delgado",
  "Zan Herrera Campos",
  "Daniel Morales Estrada",
  "Pedro Navarro Paredes",
  "Sofía Castro Márquez",
  "Juan Pérez Duarte",
  "José Domínguez León"
];


const users = names.map(name => ({name, age:Math.random() * 80 | 0, id:crypto.randomUUID()}))



const  App  = () => {
 
  return (
    <main className="w-full min-h-screen flex items-center justify-center gap-5 ">
      < BrowserRouter >
        <Routes>
          <Route path="/" element={<Choices />} />
          <Route path="/user-list" element={ <UserList data={users} />} />
          <Route path="/form" element={<UserForm />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
