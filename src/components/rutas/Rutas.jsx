import React from 'react'
import '../../assets/styles/estilos.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from '../Sidebar';
import Dashboard from '../vistas/Dashboard';
import Cuestionarios from '../vistas/Cuestionarios';
import Estudiantes from '../vistas/Estudiantes';
import Materias from '../vistas/Materias';
import IniciarSesion from '../vistas/IniciarSesion';
import Registro from '../vistas/RegistroAdmi';

const Rutas = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<IniciarSesion/>}></Route>
      <Route path='/registro' element={<Registro/>}></Route>
    </Routes>
    <Sidebar>
    <Routes>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/cuestionarios" element={<Cuestionarios/>}/>
      <Route path="/estudiantes" element={<Estudiantes/>}/>
      <Route path="/materias" element={<Materias/>}/>
    </Routes>
  </Sidebar>
    </BrowserRouter>
    </>
  )
}

export default Rutas