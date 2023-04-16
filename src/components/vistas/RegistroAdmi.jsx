import React from 'react'
import '../../assets/styles/RegistroAdmi.css'
import Fondo from "../../assets/img/Fondo.png";
import { useState } from "react";
import { Link } from "react-router-dom"


export const Registro = () => {

          //estado inicial de formulario
          const datosFormularios = {
            Nombre: "",
            Apellido: "",
            Correo: "",
            Contraseña: "",
            Carné: "",
            Foto: "",
        }

        //Estado inicial para la alerta
        const initialStateInput = {
          valorInput:'',
          mensaje: '',
          estado:false
        };

       
    
      
 //Estado para manejar los valores del formulario
 const [formulario, setFormulario] = useState(datosFormularios);

 //Estado para manejar las alertas de validación
 const [alerta, setAlerta] = useState([initialStateInput]);

  //Función para obtener los datos de los inputs 
  const ManejarEventoDeInputs = (e) =>{

     //la propiedad target del event nos permitirá obtener los valores
       const name = e.target.name;
       const value = e.target.value;

     //actualizamos los valores capturados a nuestro estado de formulario
     setFormulario({...formulario, [name]: value});

    
   }


   console.log(formulario);

    //función para validar los campos
 const handleLoginSession = (e) =>{
    e.preventDefault();


    //ordenar los datos para enviar la validación
    let verificarInputs = [
        { nombre: "Nombre", value: formulario.Nombre},
        { nombre: "Apellido", value: formulario.Apellido},
        { nombre: "Foto", value: formulario.Foto},
        { nombre: "Correo", value: formulario.Correo},
        { nombre: "Carné", value: formulario.Carné},
        { nombre: "Contraseña", value: formulario.Contraseña},
    
    ];

    //Enviar los datos a la función de validación y se reciben
    const datosValidados = ValidarInputs(verificarInputs) 

    console.log(datosValidados);

    //Enviamos las validaciones al estado que se va a encargar de mostrarlas en el formulario
  setAlerta(datosValidados);

  //obtenemos el total de validaciones
  const totalValidaciones = datosValidados.filter(input => input.estado === false).map
  ((estado) => {return false});

  console.log("Total de validaciones:", totalValidaciones.length);

  //Validación para enviar los datos al servidor
  if(totalValidaciones.length >=1){
    console.log("Enviar al servidor");
  }
 };

 const ValidarInputs = (data) =>{
  console.log(data);

//Declaramos un arreglo el cual se va a encargar de guardar las validaciones 
let errors = [];

//Recibimos los datos a validar
const datosDelFormulario = data;


//map es como un for
//Proceso de validación
datosDelFormulario.map((valorInput) =>{

  switch(valorInput.nombre){
    case 'Nombre': {

      if (valorInput.value === '' || valorInput.value === null){

        errors.push({
          valorInput:valorInput.nombre,
          mensaje: '*Campo requerido',
          estado:true
        });
      }else{
        errors.push({
          valorInput:valorInput.nombre,
          mensaje:'',
          estado:false
        })
      }

      break;
    }

    case 'Apellido': {
      if (valorInput.value === '' || valorInput.value === null){

        errors.push({
          valorInput:valorInput.nombre,
          mensaje: '*Campo requerido',
          estado:true
        });
      }else{
        errors.push({
          valorInput:valorInput.nombre,
          mensaje: '', 
          estado:false
        })
      }
      break;
    }

    case 'Foto': {
      if (valorInput.value === '' || valorInput.value === null){

        errors.push({
          valorInput:valorInput.nombre,
          mensaje: '*Campo requerido',
          estado:true
        });
      }else{
        errors.push({
          valorInput:valorInput.nombre,
          mensaje: '', 
          estado:false
        })
      }
      break;
    }

    case 'Correo': {
      if (valorInput.value === '' || valorInput.value === null){

        errors.push({
          valorInput:valorInput.nombre,
          mensaje: '*Campo requerido',
          estado:true
        });
      }else{
        errors.push({
          valorInput:valorInput.nombre,
          mensaje: '', 
          estado:false
        })
      }
      break;
    }

    case 'Contraseña': {
      if (valorInput.value === '' || valorInput.value === null){

        errors.push({
          valorInput:valorInput.nombre,
          mensaje: '*Campo requerido',
          estado:true
        });
      }else{
        errors.push({
          valorInput:valorInput.nombre,
          mensaje: '', 
          estado:false
        })
      }

      break;
    }

    default: {

      break;
    }
  }

})

//Retornamos el total de validaciones
return errors;
};
  return (
    
    <div className="" style={{ backgroundImage: `url(${Fondo})`,  backgroundPosition:"center",
    backgroundSize:"cover" }}>
        
      <section className="section-padding" onSubmit={handleLoginSession} >
        <div className="containerform">
          <div className=''>
            <div className="title">Registro Administrador </div>
            <div className="content">
              <form className='formDiv'>
                <div className="user-details">
                
                  <div className="input-box">
                    <span className="details">Nombre</span>
                    <input type="number" placeholder="Ingresa tu Nombre" name='Nombre' value={formulario.NIE} onChange={ManejarEventoDeInputs}/>
                  {
                    alerta.filter(input => input.valorInput == "Nombre" && input.estado === true).map(message => (
                      <div>
                        <span className='text-danger'>{message.mensaje}</span>
                      </div>
                    ))
                  }
                  </div>
                  <div className="input-box">
                    <span className="details">Apellido</span>
                    <input type="text" placeholder="Ingresa tu Apellido" name='Apellido' value={formulario.email} onChange={ManejarEventoDeInputs}/>
                    {
                    alerta.filter(input => input.valorInput == "Apellido" && input.estado === true).map(message => (
                      <div>
                        <span className='text-danger'>{message.mensaje}</span>
                      </div>
                    ))
                  }
                  </div>
                  <div className="input-box">
                    <span className="details">Correo</span>
                    <input type="number" placeholder="Ingresa tu Correo" name='Correo' value={formulario.telefono} onChange={ManejarEventoDeInputs}/>
                    {
                    alerta.filter(input => input.valorInput == "Correo" && input.estado === true).map(message => (
                      <div>
                        <span className='text-danger'>{message.mensaje}</span>
                      </div>
                    ))
                  }
                
                  </div>
                 
                  <div className="input-box">
                    <span className="details">Contraseña</span>
                    <input type="text" placeholder="Ingresa tu Contraseña" name='Contraseña' value={formulario.direccion} onChange={ManejarEventoDeInputs}/>
                    {
                    alerta.filter(input => input.valorInput == "Contraseña" && input.estado === true).map(message => (
                      <div>
                        <span className='text-danger'>{message.mensaje}</span>
                      </div>
                    ))
                  }
                  </div>
                  
                </div>
                <span className="details">Subir foto</span>
                <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="foto" aria-label="Upload" name='Foto' value={formulario.Foto} onChange={ManejarEventoDeInputs} ></input>
                {
                    alerta.filter(input => input.valorInput == "Foto" && input.estado === true).map(message => (
                      <div>
                        <span className='text-danger'>{message.mensaje}</span>
                      </div>
                    ))
                  }
                <div className="button">
                  <input type="submit" defaultValue="Registrarse" />
                </div>
                <p className="text-center mt-1 pregunta">¿Ya tienes una cuenta? <Link to="/" className="text-purple">Inicia Sesión</Link></p>

              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Registro