import React from "react";
import "../../assets/styles/IniciarSesionAdmi.css"
import Fondo from "../../assets/img/Fondo.png";
import { useState, useEffect } from "react";
import logo from "../../assets/img/logo1.png"
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";


function IniciarSesion (){

  useEffect(() => {
    document.title = "Log In | Administrador"
  }, []);

     //Mostrar contraseña
     const [show, setShow] = useState(false);
     const switchShow = () => setShow(!show);
   
     const [password, setPassword] = useState("");
     const onChange = ({ currentTarget }) => setPassword(currentTarget.value);

       //estado inicial de formulario
 const datosFormularios = {

    Carne: "",
    Contraseña: "",
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
    
    let verificarInputs = [
      {nombre: "Carne", value: formulario.Carne},
      {nombre: "Contraseña", value: formulario.Contraseña},
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
    case 'Carne': {

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
  }

})

//Retornamos el total de validaciones
return errors;
};




return (
  <>
    <div className="vh-100" style={{ backgroundImage: `url(${Fondo})`,  backgroundPosition:"center",
        backgroundSize:"cover" }}>
     <img src={logo} width="70px" className="m-2"/>
      <section className="bodyLogin">
        <div className="card col-8 col-sm-4 col-md-4 ">
          <div className="card-body">
            <h5 className="card-title text-center w-100">Iniciar Sesión Administrador</h5>
            <form id="" className="w-100" onSubmit={handleLoginSession}>
              <div className="form-group w-100">
                <label className="mt-4">Carné</label>
                <br />
                <input
                  className="w-100 mt-2 mb-2 form-control"
                  type="Carné"
                  placeholder="Escribe tu Carné"
                  id="inputEmail"
                  aria-describedby="inputGroup-sizing-default"
                  name="Carne"
                  value={formulario.Carne}
                  onChange={ManejarEventoDeInputs}
                />
                
                {
                  alerta.filter(input => input.valorInput == "Carne" && input.estado === true).map(message => (
                    <div>
                      <span className='text-danger'>{message.mensaje}</span>
                    </div>
                  ))
                }
              

                <label className="mt-4">Contraseña</label>
                <div className="d-flex">
                <input
                  className="w-100 mt-2 mb-2 form-control"
                  type={show ? "text" : "password"}
                  placeholder="Escribe tu Contraseña"
                  id="inputEmail"
                  aria-describedby="inputGroup-sizing-default"
                  name= 'Contraseña'
                  value={formulario.Contraseña}
                  onChange={ManejarEventoDeInputs}
                />
                 <FontAwesomeIcon
                    className="fs-5 mt-3"
                      icon={faEye}
                      onClick={switchShow}
                      {...(show ? "Ocultar" : "Mostrar")}
                      style={{ color: "#e855be" }}
                    />
                </div>
                {
                  alerta.filter(input => input.valorInput == "Contraseña" && input.estado === true).map(message => (
                    <div>
                      <span className='text-danger'>{message.mensaje}</span>
                    </div>
                  ))
                }
              </div>
              <div className="botondiv w-100">
                <button className="mt-2 btn-login w-100" type="submit">
                  Entrar
                </button>
              </div>

              <div role="alert" id="alerta"></div>
            </form>
          </div>
        </div>
      </section>
    </div>
  </>
);
}
 

export default IniciarSesion 