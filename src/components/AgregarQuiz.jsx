import React from "react";
import {useState} from "react";
import '../assets/styles/AgregarQuiz.css'
import { button } from "bootstrap";

function AgregarQuiz (){
    const [preguntas, setPreguntas] = useState ([""])

   return (
    <div>
     Preguntas:
     <button
        onClick={() => {
          setPreguntas([...preguntas, ''])
        }}
      >
        Agregar Respuestas: 
      </button>
     {
        preguntas.map ((item) => {
            return <input value={item}/>
            })
     }
    </div>
   );

 
   }
export default AgregarQuiz;