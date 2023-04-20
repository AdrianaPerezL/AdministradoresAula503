import Swal from 'sweetalert2'
import React from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Sidebar from "../Sidebar";
import { useEffect, useState } from "react";
import "../../assets/styles/materias.css";

const Materias = () => {

  const mostrarAlerta = () => {
    Swal.fire({
      title: 'Estas seguro?',
      text: "Estos cambios serán irreversibles",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, borrar',

      backdrop: `
          rgba(0,0,123,0.4)
          left top
          no-repeat
        ` ,

    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Hecho!',
          text: 'La materia ha sido eliminada',
          icon: 'success',

          backdrop: `
          rgba(0,0,123,0.4)
          left top
          no-repeat
        ` ,
        }
        )
      }
    });
  };

  const [datosServidor, setDatosServidor] =  useState([]);

  useEffect(() => {
    document.title = "Administrador | Materias";
  }, []);

  const agregarMateria = {
    nombre_materia: "",
    grado: "",
    
  }

  const initialStateInput = {
    input: "",
    message: '',
    state: false
  }

  const [editar, setEditar] = useState(agregarMateria);
  const [alerta, setAlerta] = useState([initialStateInput]);

  const ManejarEventoDeInputs = (e) =>{
    //la propiedad target del event nos permitirá obtener los valores
    const name = e.target.name;
    const value = e.target.value;

  //actualizamos los valores capturados a nuestro estado de formulario
  setEditar({...editar, [name]: value});
}

function addSubject() {
  const url = "http://127.0.0.1:8000/api/create/subject";

  let config = {
      headers: {
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json' 
      }
}

axios.post(url, editar, config)
.then(response => console.log(response.data,"Response-----------------------"))
  setEditar(agregarMateria) 
  Swal.fire({
    icon: 'success',
    title: 'Materia agregada',
    showConfirmButton: false,
    timer: 1500
  })
// const UpdateData = {
//   nombre_materia: editar.nombre_materia,
//   grado: editar.gradoMateria,
// }

// try {
//     const resp = await axios.get(url, UpdateData, config);
//     console.log(resp.data,"--------------------");
// } catch(err){
//     console.error(err);
// }
};

const handleEditSession = (e) =>{
  e.preventDefault();

  let verificarInputs = [
    {nombre: "nombre_materia", value: editar.nombre_materia},
    {nombre: "grado", value: editar.grado},
  ];

  const datosValidados = ValidarInputs(verificarInputs)

  setAlerta(datosValidados);

  const totalValidaciones = datosValidados.filter(input => input.estado === false).map
  ((estado) => {return false});

  if(totalValidaciones.length >=2){
    console.log("Enviar al servidor");
    addSubject();
  }
 };

 
  


 const ValidarInputs = (data) =>{
  console.log(data);

  let errors = [];

  const datosDelFormulario = data;

  datosDelFormulario.map((valorInput) =>{
    switch(valorInput.nombre){
      case 'nombre_materia': {
        if(valorInput.value === '' || valorInput.value === null){
  
          errors.push({
            valorInput: valorInput.nombre,
            mensaje: '*Campo requerido',
            estado: true
          });
        }else{
          errors.push({
            valorInput: valorInput.nombre,
            mensaje: '',
            estado: false
          })
        }
  
        break;
      }
      case 'grado': {
        if(valorInput.value === '' || valorInput.value === null){
  
          errors.push({
            valorInput: valorInput.nombre,
            mensaje: '*Campo requerido',
            estado: true
          });
        }else{
          errors.push({
            valorInput: valorInput.nombre,
            mensaje: '',
            estado: false
          })
        }
  
        break;
      }

      default: {
        break;
      }
    }
    })
return errors;
 }
    
  return (
    <>
    <Sidebar>
    <Navbar/>
    <h1 class="titprin">Materias</h1>
    <button id="btn-add">
    <h5 id="agregar">Agregar</h5>
    <lord-icon id="mas" src="https://cdn.lordicon.com/ejxwvtlg.json" trigger="hover" colors="outline:#ffffff,primary:#572ab0,secondary:#ffffff" style={{width: '50px', height: '50px'}}
    data-bs-toggle="modal" data-bs-target="#exampleModal1">
      </lord-icon>
    </button>
    <div class="container" id="ancho">
        <div class="row">
          <table class="table mb-0 bg-white" id="tabla">
            <thead class="bg-light" id="encabezadotabla">
              <tr>
                <th className="tabla1">#</th> {/* 1 */}
                <th className="tabla1">Nombre</th> {/* 2 */}
                <th className="tabla1">Icono</th> {/* 3 */}
                <th className="tabla1">Grado</th> {/* 4*/}
                <th className="tabla1">Cuestionarios</th> {/* 5 */}
                <th className="tabla1">Actions</th> {/* 5 */}
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>  {/* 1 */}

                <td>
                <p>Biología</p> {/* 2 */}
                </td>

                <td>  {/* 3 */}
                <div class="d-flex align-items-center" id="imagen">
                    <img className='icono' src="https://cdn-icons-png.flaticon.com/512/6502/6502964.png" alt=""/>
                  </div>
                </td>

                <td> {/* 4 */}
                  <p class="fw-normal mb-1">1° año</p>
                </td>

                <td> {/* 5 */}
                  <p class="fw-normal mb-1">XX</p>
                </td>

                <td>
                    <button id="borrar" onClick={() => mostrarAlerta()}>
                      <lord-icon
                      src="https://cdn.lordicon.com/jmkrnisz.json"
                      trigger="hover"
                      colors="primary:#0ad5bd"
                      style={{ width: "50px", height: "50px" }}>
                      </lord-icon>
                      </button>
                  
                    <lord-icon
                      src="https://cdn.lordicon.com/hkkhwztk.json"
                      trigger="hover"
                      data-bs-toggle="modal" data-bs-target="#exampleModal2"
                      colors="primary:#0ad5bd"
                      style={{ width: "50px", height: "50px" }}
                    ></lord-icon>
                  </td>
              </tr>
            
              <tr>
                <td>2</td>  {/* 1 */}

                <td>
                <p>Física</p> {/* 2 */}
                </td>

                <td>  {/* 3 */}
                <div class="d-flex align-items-center" id="imagen">
                <img className='icono' src="https://cdn-icons-png.flaticon.com/512/1467/1467187.png" alt=""/>
                  </div>
                </td>

                <td> {/* 4 */}
                  <p class="fw-normal mb-1">1° año</p>
                </td>

                <td> {/* 5 */}
                  <p class="fw-normal mb-1">XX</p>
                </td>

                <td>
                    <button id="borrar" onClick={() => mostrarAlerta()}>
                      <lord-icon
                      src="https://cdn.lordicon.com/jmkrnisz.json"
                      trigger="hover"
                      colors="primary:#0ad5bd"
                      style={{ width: "50px", height: "50px" }}>
                      </lord-icon>
                      </button>

                    <lord-icon
                      src="https://cdn.lordicon.com/hkkhwztk.json"
                      trigger="hover"
                      data-bs-toggle="modal" data-bs-target="#exampleModal2"
                      colors="primary:#0ad5bd"
                      /* ALERTAAAAAAA */
                      style={{ width: "50px", height: "50px" }}
                    ></lord-icon>
                  </td>
              </tr>

              <tr>
                <td>3</td>  {/* 1 */}

                <td>
                <p>Química</p> {/* 2 */}
                </td>

                <td>  {/* 3 */}
                <div class="d-flex align-items-center" id="imagen">
                <img className='icono' src="https://cdn-icons-png.flaticon.com/512/2470/2470882.png" alt=""/>
                  </div>
                </td>

                <td> {/* 4 */}
                  <p class="fw-normal mb-1">1° año</p>
                </td>

                <td> {/* 5 */}
                  <p class="fw-normal mb-1">XX</p>
                </td>

                <td>
                <button id="borrar" onClick={() => mostrarAlerta()}>
                      <lord-icon
                      src="https://cdn.lordicon.com/jmkrnisz.json"
                      trigger="hover"
                      colors="primary:#0ad5bd"
                      style={{ width: "50px", height: "50px" }}>
                      </lord-icon>
                      </button>

                    <lord-icon
                      src="https://cdn.lordicon.com/hkkhwztk.json"
                      trigger="hover"
                      data-bs-toggle="modal" data-bs-target="#exampleModal2"
                      colors="primary:#0ad5bd"
                      style={{ width: "50px", height: "50px" }}
                    ></lord-icon>
                  </td>
              </tr>

              <tr>
                <td>4</td>  {/* 1 */}

                <td>
                <p>Estudios Sociales</p> {/* 2 */}
                </td>

                <td>  {/* 3 */}
                <div class="d-flex align-items-center" id="imagen">
                <img className='icono' src="https://cdn-icons-png.flaticon.com/512/3079/3079289.png" alt=""/>
                  </div>
                </td>

                <td> {/* 4 */}
                  <p class="fw-normal mb-1">1° año</p>
                </td>

                <td> {/* 5 */}
                  <p class="fw-normal mb-1">XX</p>
                </td>

                <td>
                <button id="borrar" onClick={() => mostrarAlerta()}>
                      <lord-icon
                      src="https://cdn.lordicon.com/jmkrnisz.json"
                      trigger="hover"
                      colors="primary:#0ad5bd"
                      style={{ width: "50px", height: "50px" }}>
                      </lord-icon>
                      </button>

                    <lord-icon
                      src="https://cdn.lordicon.com/hkkhwztk.json"
                      trigger="hover"
                      data-bs-toggle="modal" data-bs-target="#exampleModal2"
                      colors="primary:#0ad5bd"
                      /* ALERTAAAAAAA */
                      style={{ width: "50px", height: "50px" }}
                    ></lord-icon>
                  </td>
              </tr>

              
{/* NO TOCAR */}
              <tr>
                <td>#</td>  {/* 1 */}

                <td>
                <p>{}</p> {/* 2 */}
                </td>

                <td>  {/* 3 */}
                <div class="d-flex align-items-center" id="imagen">
                    <img id="imagen"
                      class="rounded-circle"
                      alt=""
                      width="90px"
                      height=" 90px"
                      src="img/imgcircle1.png"
                    />
                    <div class="ms-1">
                      <p class="fw-bold mb-1"></p>
                      <p class="text-muted mb-0"></p>
                    </div>
                  </div>
                </td>

                <td> {/* 4 */}
                  <p class="fw-normal mb-1">XX</p>
                </td>

                <td> {/* 5 */}
                  <p class="fw-normal mb-1">XX</p>
                </td>

                <td>
                <button id="borrar" onClick={() => mostrarAlerta()}>
                      <lord-icon
                      src="https://cdn.lordicon.com/jmkrnisz.json"
                      trigger="hover"
                      colors="primary:#0ad5bd"
                      style={{ width: "50px", height: "50px" }}>
                      </lord-icon>
                      </button>
                    <lord-icon
                      src="https://cdn.lordicon.com/hkkhwztk.json"
                      trigger="hover"
                      data-bs-toggle="modal" data-bs-target="#exampleModal2"
                      colors="primary:#0ad5bd"
                      /* ALERTAAAAAAA */
                      style={{ width: "50px", height: "50px" }}
                    ></lord-icon>
                  </td>
              </tr>
         </tbody>
          </table>
        </div>
      </div>
    </Sidebar>
{/* Modal1 agregar materias */}
    <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <form onSubmit={handleEditSession}>
        <div class="modal-dialog">
          
          <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title agregar" id="exampleModalLabel">Agregar Materia</h5>

              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="form-outline">
                   
                    <label class="form-label" for="typeText">Nombre de la materia</label>
                    <input type="text" id="typeText" class="form-control mb-3" placeholder="Nombre de la materia" name="nombre_materia" onChange={ManejarEventoDeInputs} value={editar.nombre_materia}/>
                    {
                    alerta.filter(input => input.valorInput == "nombre_materia" && input.estado === true).map(message => (
                      <div>
                        <span className='text-danger'>{message.mensaje}</span>
                      </div>
                    ))
                  }
                    <label class="form-label" for="typeText">Grado</label>
                    <input type="number" id="typeText" class="form-control mb-3" placeholder="Grado" name="grado" onChange={ManejarEventoDeInputs} value={editar.grado}/>
                    {
                    alerta.filter(input => input.valorInput == "grado" && input.estado === true).map(message => (
                      <div>
                        <span className='text-danger'>{message.mensaje}</span>
                      </div>
                    ))
                  }
                  </div>
            </div>
             
              <button type="submit" class="btn-add m-4">Agregar</button>
        
          </div>
        </div>
        </form>
      </div>


{/* Modal2 */}
<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <form onSubmit={handleEditSession}>
        <div class="modal-dialog">
          
          <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title agregar" id="exampleModalLabel">Editar Materia</h5>

              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="form-outline">
                   
                    <label class="form-label" for="typeText">Nombre de la materia</label>
                    <input type="text" id="typeText" class="form-control mb-3" placeholder="Nombre de la materia" name="nombre_materia" onChange={ManejarEventoDeInputs} value={editar.nombre_materia}/>
                    {
                    alerta.filter(input => input.valorInput == "nombre_materia" && input.estado === true).map(message => (
                      <div>
                        <span className='text-danger'>{message.mensaje}</span>
                      </div>
                    ))
                  }
                    <label class="form-label" for="typeText">Grado</label>
                    <input type="text" id="typeText" class="form-control mb-3" placeholder="Grado" name="grado" onChange={ManejarEventoDeInputs} value={editar.grado}/>
                    {
                    alerta.filter(input => input.valorInput == "grado" && input.estado === true).map(message => (
                      <div>
                        <span className='text-danger'>{message.mensaje}</span>
                      </div>
                    ))
                  }
                  </div>
            </div>
             
              <button type="submit" class="btn-add m-4">Agregar</button>
        
          </div>
        </div>
        </form>
      </div>
    </>
  );
};

export default Materias;
