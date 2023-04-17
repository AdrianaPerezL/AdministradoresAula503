import React from "react";
import {useState} from "react";
import '../assets/styles/AgregarQuiz.css'
import { Button } from "bootstrap";

function AgregarQuiz (){
    const [preguntas, setPreguntas] = useState ([""])

   return (
    <div>
     Agregar preguntas: 

     {
        preguntas.map ((item) => {
            return <input value={item} />
            })
     }
    </div>
   );

 
   }
export default AgregarQuiz;