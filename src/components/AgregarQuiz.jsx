import React from "react";
import {useState} from "react";
import Sidebar from "./Sidebar";
import Navbar from "./vistas/Navbar";
import '../assets/styles/AgregarQuiz.css'


function AgregarQuiz (){
    const [preguntas, setPreguntas] = useState ([""])

   return (
    <div>
     <Sidebar/>
     <Navbar/>
     Preguntas:
     <button
        onClick={() => {
          setPreguntas([...preguntas, ''])
        }}
      >
        Agregar Respuestas: 
      </button>
     {
        preguntas.map ((item, index) => {
            return <div style={{display:"flex"}}> 
             <input value={item}/>
             <button
             onClick={() => {
            const newarr = preguntas.filter((i, j) => {
                return index !== j
            }) 
            console.log(newarr)
              setPreguntas (newarr)
              }}> 
              Borrar </button>
             
            </div>
           
            })
     }
    </div>
   );

 
   }
export default AgregarQuiz;