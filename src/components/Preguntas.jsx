import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

export const AgregarPreguntas = () => {
  //!VALIDACIONES DE DATOS
  //Navegacion del boton luego de validar correctamente
const Navigate = useNavigate();

  //Estado inicial del formulario
  const datosPreguntas = {
    pregunta: "",
    puntuacion: "",
    respuesta1: "",
    respuesta2: "",
    respuesta3: "",
    respuesta4: "",
    respcorrecta: "",
  };

  //Estado inicial de la elerta
  const initialStateInput = {
    valorInput: "",
    mensaje: "",
    estado: false,
  };

  //Estado para manejar los valores del formulario
  const [formulario, setFormulario] = useState(datosPreguntas);

  //Estado para manejar las alertas de validación
  const [alerta, setAlerta] = useState([initialStateInput]);
  const [respuestaCheck, setRespuestaCheck] = useState(false);

  //Funcion para obtener lo de los inputs
  const ManejarEventoDeInputs = (event) => {
    //La propiedad target del event nos permitirá obtener los valores
    const name = event.target.name;
    const value = event.target.value;
    const id = event.target.id;

    console.log(id);
    console.log(name);
    
    if (name === "respcorrecta") {
      const check = document.getElementById(id);
      console.log(check);
      setRespuestaCheck(check?.checked);
      console.log(check?.checked);
      formulario.respcorrecta = id;
    } else {
      //Actualizamos los valores capturados a nuestro estado de formulario
      setFormulario({ ...formulario, [name]: value });
    }
      
  };

  console.log("Obtener respuesta check", respuestaCheck);

  //Funcion que se va a encargar de validar los campos
  const handleLoginSession = (e) => {
    //Previene el comportamiento por defecto que trae consigo el evento
    e.preventDefault();

    //ordenamos los datos para enviarlos a la validación
    let verificarInputs = [
      { nombre: "pregunta", value: formulario.pregunta },
      { nombre: "puntuacion", value: formulario.puntuacion },
      { nombre: "respuesta1", value: formulario.respuesta1 },
      { nombre: "respuesta2", value: formulario.respuesta2 },
      { nombre: "respuesta3", value: formulario.respuesta3 },
      { nombre: "respuesta4", value: formulario.respuesta4 },
      { nombre: "respcorrecta", value: formulario.respcorrecta },
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
    console.log(totalValidaciones);

    console.log("Total de validaciones", totalValidaciones.length);

    //Validación para enviar los datos al servidor
    if (totalValidaciones.length >= 6) {
      if (respuestaCheck !== false) {
        console.log("Enviar al servidor");
           //Alerta de datos enviados
           const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });
    
          Toast.fire({
            icon: "success",
            title: "Pregunta guardada",
          });
      //Navigate
      Navigate("/cuestionario/crear-cuestionario/agregar-preguntas");
      } 
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
        case "pregunta": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "Por favor ingrese la pregunta",
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

        // eslint-disable-next-line no-fallthrough
        case "respuesta1": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "Ingresa la respuesta",
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
        case "respuesta2": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "Ingresa la respuesta",
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
        case "respuesta3": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "Ingresa la respuesta",
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
        case "respuesta4": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "Ingresa la respuesta",
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
        case "puntuacion": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "Por favor ingrese la puntuación de esta pregunta",
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
                mensaje: "Ingrese un puntaje válido",
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
  console.log("aqui deberia ir", formulario.respcorrecta);


  //!Validacion de checkbox

  const alertaValidarChecks = () => {
    
    if (formulario.respcorrecta === "") {
      Swal.fire({
        icon: "error",
        title: "Respuesta correcta no seleccionada",
        text: "Debe seleccionar cual de todas las respuestas ingresadas es la correcta",
      });
    }
  }
  return (
    <main>


      <section className="relative overflow-x-auto shadow-md sm:rounded-lg p-12 pt-12 mx-24">
        <div className="flex justify-between p-12 text-center text-3xl text-white">
          <Link
            to="/cuestionario/crear-cuestionario"
            className="flex justify-start"
          >
          </Link>
          <h1 className="flex justify-center">Agregar Preguntas</h1>
          <div></div>
        </div>

        <form
          onSubmit={handleLoginSession}
          className="mb-8 flex justify-center space-x-48"
        >
          <div>
            {/*Pregunta */}
            <div className="mb-6 w-96">
              <label
                htmlFor="pregunta"
                className="block text-sm font-medium text-white dark:text-white mb-1"
              >
                Pregunta
              </label>
              <input
                type="text"
                id="pregunta"
                name="pregunta"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={formulario.pregunta}
                onChange={ManejarEventoDeInputs}
              />
              {alerta
                .filter(
                  (input) =>
                    input.valorInput === "pregunta" && input.estado === true
                )
                .map((message) => (
                  <div className="py-2">
                    <span className="text-red-500 mt-2">{message.mensaje}</span>
                  </div>
                ))}
            </div>

            {/*Puntuación*/}
            <div className="mb-6 w-full">
              <label
                htmlFor="puntuacion"
                className="block text-sm font-medium text-white dark:text-white mb-1"
              >
                Puntuación
              </label>
              <input
                type="number"
                id="puntuacion"
                name="puntuacion"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={formulario.puntuacion}
                onChange={ManejarEventoDeInputs}
              />
              {alerta
                .filter(
                  (input) =>
                    input.valorInput === "puntuacion" && input.estado === true
                )
                .map((message) => (
                  <div className="py-2">
                    <span className="text-red-500 mt-2">{message.mensaje}</span>
                  </div>
                ))}
            </div>

            {/*AREA DE RESPUESTAS */}
            <div>
              <h2 className="text-lg text-white text-center p-2">
                Sección de respuestas
              </h2>
              {/*Respuesta 1*/}
              <div className="mb-6 w-full">
                <label
                  htmlFor="respuesta1"
                  className="block text-sm font-medium text-white dark:text-white mb-1"
                >
                  Respuesta 1
                </label>
                <input
                  type="text"
                  id="respuesta1"
                  name="respuesta1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={formulario.respuesta1}
                  onChange={ManejarEventoDeInputs}
                />
                {alerta
                  .filter(
                    (input) =>
                      input.valorInput === "respuesta1" && input.estado === true
                  )
                  .map((message) => (
                    <div className="py-2">
                      <span className="text-red-500 mt-2">
                        {message.mensaje}
                      </span>
                    </div>
                  ))}
              </div>

              {/*Respuesta 2*/}
              <div className="mb-6 w-full">
                <label
                  htmlFor="respuesta2"
                  className="block text-sm font-medium text-white dark:text-white mb-1"
                >
                  Respuesta 2
                </label>
                <input
                  type="text"
                  id="respuesta2"
                  name="respuesta2"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={formulario.respuesta2}
                  onChange={ManejarEventoDeInputs}
                />
                {alerta
                  .filter(
                    (input) =>
                      input.valorInput === "respuesta2" && input.estado === true
                  )
                  .map((message) => (
                    <div className="py-2">
                      <span className="text-red-500 mt-2">
                        {message.mensaje}
                      </span>
                    </div>
                  ))}
              </div>

              {/*Respuesta 3*/}
              <div className="mb-6 w-full">
                <label
                  htmlFor="respuesta3"
                  className="block text-sm font-medium text-white dark:text-white mb-1"
                >
                  Respuesta 3
                </label>
                <input
                  type="text"
                  id="respuesta3"
                  name="respuesta3"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={formulario.respuesta3}
                  onChange={ManejarEventoDeInputs}
                />
                {alerta
                  .filter(
                    (input) =>
                      input.valorInput === "respuesta3" && input.estado === true
                  )
                  .map((message) => (
                    <div className="py-2">
                      <span className="text-red-500 mt-2">
                        {message.mensaje}
                      </span>
                    </div>
                  ))}
              </div>

              {/*Respuesta 4*/}
              <div className="mb-6 w-full">
                <label
                  htmlFor="respuesta4"
                  className="block text-sm font-medium text-white dark:text-white mb-1"
                >
                  Respuesta 4
                </label>
                <input
                  type="text"
                  id="respuesta4"
                  name="respuesta4"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={formulario.respuesta4}
                  onChange={ManejarEventoDeInputs}
                />
                {alerta
                  .filter(
                    (input) =>
                      input.valorInput === "respuesta4" && input.estado === true
                  )
                  .map((message) => (
                    <div className="py-2">
                      <span className="text-red-500 mt-2">
                        {message.mensaje}
                      </span>
                    </div>
                  ))}
              </div>
            </div>

            {/*Selecionar respuesta correcta*/}
            <div>
              <h2 className="text-lg text-white text-center p-2">
                ¿Cuál es la respuesta correcta?
              </h2>
              <div className="text-white flex justify-evenly">
                {/*Checkbox 1*/}
                <div className="w-full p-1 pt-4">
                  <div className="">
                    <input
                      type="radio"
                      className="w-4 h-4 text-black bg-gray-300 border-gray-300 rounded focus:ring-black dark:focus:ring-black dark:ring-offset-black focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      name="respcorrecta"
                      id="respcorrecta1"
                      onChange={ManejarEventoDeInputs}
                    />{" "}
                    <span className="px-2">Respuesta 1</span>
                  </div>
                </div>

                {/*Checkbox 2*/}
                <div className="w-full p-1 pt-4">
                  <div className="">
                    <input
                      type="radio"
                      className="w-4 h-4 text-black bg-gray-300 border-gray-300 rounded focus:ring-black dark:focus:ring-black dark:ring-offset-black focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      name="respcorrecta"
                      id="respcorrecta2"
                      onChange={ManejarEventoDeInputs}
                    />{" "}
                    <span className="px-2">Respuesta 2</span>
                  </div>
                </div>
              </div>
              <div className="text-white flex justify-between">
                {/*Checkbox 3*/}
                <div className="w-full p-1 pt-4">
                  <div className="">
                    <input
                      type="radio"
                      className="w-4 h-4 text-black bg-gray-300 border-gray-300 rounded focus:ring-black dark:focus:ring-black dark:ring-offset-black focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      name="respcorrecta"
                      id="respcorrecta3"
                      onChange={ManejarEventoDeInputs}
                    />{" "}
                    <span className="px-2">Respuesta 3</span>
                  </div>
                </div>

                {/*Checkbox 4*/}
                <div className="w-full p-1 pt-4">
                  <div className="">
                    <input
                      type="radio"
                      className="w-4 h-4 text-black bg-gray-300 border-gray-300 rounded focus:ring-black dark:focus:ring-black dark:ring-offset-black focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      name="respcorrecta"
                      id="respcorrecta4"
                      onChange={ManejarEventoDeInputs}
                    />{" "}
                    <span className="px-2">Respuesta 4</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="  text-white bg-green-500 hover:bg-gree-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-400 dark:hover:bg-green-500 dark:focus:ring-green-600"
                onClick={alertaValidarChecks}
              >
                Siguiente
              </button>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};
