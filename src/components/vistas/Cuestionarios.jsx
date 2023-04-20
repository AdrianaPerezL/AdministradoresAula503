import React from 'react'
import Sidebar from '../Sidebar'
import Navbar from './Navbar'
import { useEffect } from 'react'
import AgregarQuiz from '../AgregarQuiz'


const Cuestionarios = () => {
  useEffect(() => {
    document.title = "Administrador | Cuestionarios"
  }, []);

  return (
    <>
  <Sidebar>
    <Navbar />
    <div className='px-5 contenedordashboard2'>

    <AgregarQuiz/>
    </div>
  </Sidebar>
    </>
  )
}

export default Cuestionarios