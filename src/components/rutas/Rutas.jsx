import React from 'react'
import '../../assets/styles/estilos.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from '../Sidebar';
import Dashboard from '../vistas/Dashboard';
import Cuestionarios from '../vistas/Cuestionarios';
import Estudiantes from '../vistas/Estudiantes';
import Materias from '../vistas/Materias';
import IniciarSesion from '../vistas/IniciarSesion';
import Perfil from '../vistas/Perfil';
import AgregarQuiz from "../AgregarQuiz";
import {Preguntas} from "../Preguntas";
import Example from '../vistas/Example';
import Error404 from '../vistas/Error404'


const Rutas = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<IniciarSesion/>}></Route>
    </Routes>
 
    <Routes>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="*" element={<Error404/>}/>
      <Route path="/cuestionarios" element={<Cuestionarios/>}/>
      <Route path="/estudiantes" element={<Estudiantes/>}/>
      <Route path="/materias" element={<Materias/>}/>
      <Route path="/perfil" element={<Perfil/>}/>
      <Route path="/agregarquiz" element={<AgregarQuiz/>}/>
      <Route path="/example" element={<Example/>}/>
      <Route path="/preguntas" element={<Preguntas/>}/>
      
   
    </Routes>
 
    </BrowserRouter>
    </>
  )
}

export default Rutas