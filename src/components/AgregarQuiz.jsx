
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/img/logo1.png"
import { useState } from "react";
import "../assets/styles/AgregarQuiz.css"
import Fondo from "../assets/img/Fondo.png";

const AgregarQuiz = () => {
  //!VALIDACIONES DE DATOS
  //Navegacion del boton luego de validar correctamente
  const Navigate = useNavigate ();

  //Estado inicial del formulario
  const datosCuestionario = {
    nombreC: "",
    temaC: "",
    descripC: "",
    cantPC: "",
  };

  //Estado inicial de la elerta
  const initialStateInput = {
    valorInput: "",
    mensaje: "",
    estado: false,
  };

  //Estado para manejar los valores del formulario
  const [formulario, setFormulario] = useState(datosCuestionario);

  //Estado para manejar las alertas de validación
  const [alerta, setAlerta] = useState([initialStateInput]);

  //Funcion para obtener lo de los inputs
  const ManejarEventoDeInputs = (event) => {
    //La propiedad target del event nos permitirá obtener los valores
    const name = event.target.name;
    const value = event.target.value;

    //Actualizamos los valores capturados a nuestro estado de formulario
    setFormulario({ ...formulario, [name]: value });
  };

  //Funcion que se va a encargar de validar los campos
  const handleLoginSession = (e) => {
    //Previene el comportamiento por defecto que trae consigo el evento
    e.preventDefault();

    //ordenamos los datos para enviarlos a la validación
    let verificarInputs = [
      { nombre: "nombreC", value: formulario.nombreC },
      { nombre: "temaC", value: formulario.temaC },
      { nombre: "descripC", value: formulario.descripC },
      { nombre: "cantPC", value: formulario.cantPC },
    ];

    //Enviamos los datos a la función de validación y recibimos las validaciones
    const datosValidados = ValidarInputs(verificarInputs);
    console.log(datosValidados);

    //Enviamos las validaciones al estado que se va a encargar de mostrarlas en el formulario
    setAlerta(datosValidados);

    //Obtener el total de validación
    const totalValidaciones = datosValidados
      .filter((input) => input.estado === false)
      .map((estado) => {
        return false;
      });

    console.log("Total de validacioes", totalValidaciones.length);

    //Validación para enviar los datos al servidor
    if (totalValidaciones.length >= 4) {
      console.log("Enviar al servidor");
      Navigate("/cuestionario/crear-cuestionario/agregar-preguntas");
    }
  };

  const ValidarInputs = (data) => {
    console.log(data);

    //Declaramos un arreglo el cual se va a encargar de guardar las validaciones
    let errors = [];

    //Recibidos los datos a validar
    const datosDelFormulario = data;

    //Proceso de validacion
    datosDelFormulario.map((valorInput) => {
      // eslint-disable-next-line default-case
      switch (valorInput.nombre) {
        case "nombreC": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "Por favor ingrese el nombre del cuestionario",
              estado: true,
            });
          } else {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "",
              estado: false,
            });
          }
          break;
        }
        case "temaC": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "Por favor ingrese el tema del cuestionario",
              estado: true,
            });
          } else {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "",
              estado: false,
            });
          }
          break;
        }
        case "descripC": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "Por favor ingrese la descripción del cuestionario",
              estado: true,
            });
          } else {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "",
              estado: false,
            });
          }
          break;
        }
        case "cantPC": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "Por favor ingrese la cantidad de preguntas",
              estado: true,
            });
          } else {
            var num = false;
            for (var i = 0; i < valorInput.value.length; i++) {
              if (
                valorInput.value.charCodeAt(i) >= 48 &&
                valorInput.value.charCodeAt(i) <= 57
              ) {
                num = true;
              }
            }
            if (num === true) {
              errors.push({
                valorInput: valorInput.nombre,
                mensaje: "",
                estado: false,
              });
            } else {
              errors.push({
                valorInput: valorInput.nombre,
                mensaje: "ingrese una cantidad de preguntas válida",
                estado: true,
              });
            }
            break;
          }
        }
      }
    });
    //retornamos el total de validaciones
    return errors;
  };
  console.log(formulario);
  return (
    <main>

    <div className="vh-100" style={{ backgroundImage: `url(${Fondo})`,  backgroundPosition:"center",
        backgroundSize:"cover" }}>
     <img src={logo} width="70px" className="m-2"/>
      <section className="bodyQuiz"/>
        <div className="">
          <div className="card-quiz">
            <h5 className="card-title text-center w-100 space">Agregar Cuestionario</h5>
        <div>
          <div className="container max-w-screen-lg mx-auto">
            <div>
             

              {/*<!--Sección entrada de datos del cuestionario-->*/}

              <form onSubmit={handleLoginSession} className="mb-8 flex justify-center space-x-48 ">
                <div>
                  {/*<!--Nombre-->¨*/}
                  <div className="pb-2 w-full py-4">
                    <label htmlFor="nombreC" className="pregunta">
                      Nombre del Cuestionario: 
                    </label>
                    <input
                      type="text"
                      name="nombreC"
                      id="nombreC"
                      className="form-control"
                      value={formulario.nombreC}
                      onChange={ManejarEventoDeInputs}
                    />
                    {alerta
                      .filter(
                        (input) =>
                          input.valorInput === "nombreC" &&
                          input.estado === true
                      )
                      .map((message) => (
                        <div className="py-2">
                          <span className="text-red-500 mt-2">
                            {message.mensaje}
                          </span>
                        </div>
                      ))}
                  </div>

                  {/*<!--Grado-->¨*/}
                  <div className="pb-2 w-full py-4">
                    <label htmlFor="gradoC" className="preguntak">
                      Grado:
                    </label>
                    <select
                      className="form-control"
                      id="gradoC"
                      name="gradoC"
                      required
                    >
                      <option>Séptimo</option>
                      <option>Óctavo</option>
                      <option>Noveno</option>
                      <option>Primer año</option>
                      <option>Segundo año</option>
                    </select>
                  </div>

                  {/*<!--Materia-->*/}
                  <div className="pb-2 w-full py-4">
                    <label htmlFor="materiaC" className="pregunta">
                      Materia: 
                    </label>
                    <select
                      className="form-control"
                      id="materiaC"
                      name="materiaC"
                      required
                    >
                      <option>Ciencias Naturales</option>
                      <option>Física</option>
                      <option>Química</option>
                      <option>Biología</option>
                    </select>
                  </div>

                  {/*<!--Tema-->*/}
                  <div className="pb-2 w-full py-4">
                    <label htmlFor="temaC" className="pregunta">
                      Tema: 
                    </label>
                    <input
                      type="text"
                      name="temaC"
                      id="temaC"
                      className="form-control"
                      value={formulario.temaC}
                      onChange={ManejarEventoDeInputs}
                    />
                    {alerta
                      .filter(
                        (input) =>
                          input.valorInput === "temaC" &&
                          input.estado === true
                      )
                      .map((message) => (
                        <div className="py-2">
                          <span className="text-red-500 mt-2">
                            {message.mensaje}
                          </span>
                        </div>
                      ))}
                  </div>

                  {/*<!--Descripción-->*/}
                  <div className="pb-2 w-full py-4">
                    <label htmlFor="descripC" className="pregunta">
                      Descripción:
                    </label>
                    <textarea
                      name="descripC"
                      id="descripC"
                      cols="30"
                      rows="6"
                      className="form-control"
                      style={{ resize: "none" }}
                      value={formulario.descripC}
                      onChange={ManejarEventoDeInputs}
                    />
                    {alerta
                      .filter(
                        (input) =>
                          input.valorInput === "descripC" &&
                          input.estado === true
                      )
                      .map((message) => (
                        <div className="py-2">
                          <span className="text-red-500 mt-2">
                            {message.mensaje}
                          </span>
                        </div>
                      ))}
                  </div>

                  {/*<!--Cantidad de preguntas-->*/}
                  <div className="pb-2 w-full py-4">
                    <label htmlFor="cantPC" className="pregunta">
                   Numero de preguntas
                    </label>
                    <input
                      type="number"
                      name="cantPC"
                      id="cantPC"
                      className="form-control"
                      value={formulario.cantPC}
                      onChange={ManejarEventoDeInputs}
                    />
                    {alerta
                      .filter(
                        (input) =>
                          input.valorInput === "cantPC" &&
                          input.estado === true
                      )
                      .map((message) => (
                        <div className="py-2">
                          <span className="text-red-500 mt-2">
                            {message.mensaje}
                          </span>
                        </div>
                      ))}
                  </div>
                  {/*!--Agregar preguntas-->*/}
                  <div className="flex justify-end py-4 text w-full">
                    {/*<Link
                      to="/cuestionario/crear-cuestionario/agregar-preguntas"
                      className="buttonP  text-white"
                      >*/}
                    <button
                      type="submit"
                      className="btn-siguiente">
                      Agregar preguntas
                    </button>
                    {/* </Link>*/}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
  );
};

export default AgregarQuiz;
