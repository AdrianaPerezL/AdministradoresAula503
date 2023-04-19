
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/img/logo1.png"
import { useState } from "react";
import "../assets/styles/AgregarQuiz.css"
import Fondo from "../assets/img/Fondo.png";

const CrearCuestionario = () => {
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
        backgroundSize:"cover" }}/>
        <img src={logo} width="70px" className="m-2"/>
        <h5 className="card-title text-center w-100"> Crear Cuestionario</h5>
       <section className="relative overflow-x-auto shadow-md sm:rounded-lg p-12 pt-24 mx-24">
        <div className="flex justify-between p-8 text-center text-3xl text-white">
          <Link to="/cuestionario" className="flex justify-start">
          </Link>

          <div></div>
        </div>
        <div>
          <div className="container max-w-screen-lg mx-auto">
            <div>
              {/*<!--Contenedor verde mas oscurito-->*/}

              {/*<!--Sección entrada de datos del cuestionario-->*/}

              <form onSubmit={handleLoginSession} className="mb-8 flex justify-center space-x-48 ">
                <div>
                  {/*<!--Nombre-->¨*/}
                  <div className="pb-2 w-full py-4">
                    <label htmlFor="nombreC" className="text-white">
                      Nombre del Cuestionario
                    </label>
                    <input
                      type="text"
                      name="nombreC"
                      id="nombreC"
                      className="h-10 border mt-1 rounded  w-full bg-gray-300"
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
                    <label htmlFor="gradoC" className="text-white">
                      Grado
                    </label>
                    <select
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-300"
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
                    <label htmlFor="materiaC" className="text-white">
                      Materia
                    </label>
                    <select
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-300"
                      id="materiaC"
                      name="materiaC"
                      required
                    >
                      <option>Ciencias y tecnología</option>
                      <option>Física</option>
                      <option>Química</option>
                      <option>Biología</option>
                    </select>
                  </div>

                  {/*<!--Unidad-->*/}
                  <div className="pb-2 w-full py-4">
                    <label htmlFor="unidadC" className="text-white">
                      Unidad
                    </label>
                    <select
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-300"
                      id="unidadC"
                      name="unidadC"
                      required
                    >
                      <option>Unidad 1 – Ciencia y tecnología</option>
                      <option>Unidad 2 – Propiedades de la materia</option>
                      <option>Unidad 3 – Materia y energía</option>
                    </select>
                  </div>

                  {/*<!--Tema-->*/}
                  <div className="pb-2 w-full py-4">
                    <label htmlFor="temaC" className="text-white">
                      Tema
                    </label>
                    <input
                      type="text"
                      name="temaC"
                      id="temaC"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-300"
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
                    <label htmlFor="descripC" className="text-white">
                      Descripción
                    </label>
                    <textarea
                      name="descripC"
                      id="descripC"
                      cols="30"
                      rows="6"
                      className="h-14 border mt-1 rounded px-4 w-full bg-gray-300"
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
                    <label htmlFor="cantPC" className="text-white">
                      ¿Cuántas preguntas tendrá este cuestionario?
                    </label>
                    <input
                      type="number"
                      name="cantPC"
                      id="cantPC"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-300"
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
                      className="  text-white bg-green-500 hover:bg-gree-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-400 dark:hover:bg-green-500 dark:focus:ring-green-600"
                    >
                      Agregar preguntas
                    </button>
                    {/* </Link>*/}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CrearCuestionario;
