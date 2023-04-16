import React from 'react'
import Sidebar from '../Sidebar'
import Navbar from './Navbar'
import { useEffect } from 'react'

const Cuestionarios = () => {
  useEffect(() => {
    document.title = "Administrador | Cuestionarios"
  }, []);

  return (
    <>
  <Sidebar>
    <Navbar />
    <h1>Cuestionarios</h1>
  </Sidebar>
    </>
  )
}

export default Cuestionarios