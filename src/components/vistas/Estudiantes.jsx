import React from 'react'
import Navbar from './Navbar'
import '../../assets/styles/Estudiantes.css'
import Sidebar from '../Sidebar'
import { useEffect } from 'react'
/* import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content' */

const Estudiantes = () => {
  useEffect(() => {
    document.title = "Administrador | Estudiantes"
  }, []);

  return (
    <>
    <Sidebar>
    <Navbar/>
        <h1 class="titprin">Perfiles Registrados</h1>
        <div id="select">
          <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupSelect01" >
              Filtrar por
            </label>
            <select class="form-select" id="inputGroupSelect01">
              <option selected>Buscar</option>
              <option value="1">Departamento</option>
              <option value="2">Municipio</option>
              <option value="3">NIE</option>
            </select>
        <h4 class="headingChart">Perfiles registrados</h4>
        <div className="container-fluid">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Buscar estudiante"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                class="btn btn-buscarEstudiante"
                type="button"
                id="button-addon2"
              >
                Button
              </button>
            </div>
          </div>
  
        <div class="container" id="ancho">
          <div class="row">
            <table class="table mb-0 bg-white" id="tabla">
              <thead class="bg-light" id="encabezadotabla">
                <tr>
                  <th>NIE</th>
                  <th>Nombre</th>
                  <th>Foto</th>
                  <th>Institución</th>
                  <th>Edad</th>
                  <th>Grado</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
  
              <tbody>
                <tr>
                  <td>0000</td>
  
                  <td>
                  <p>John Doe</p>
                  </td>
  
                  <td>
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
  
                  <td>
                    <p class="fw-normal mb-1">XXXXX</p>
                  </td>
  
                  <td>
                    <p class="fw-normal mb-1">XX</p>
                  </td>
  
                  <td>
                    <p class="fw-normal mb-1">XX</p>
                  </td>
  
                  <td>
                    <p class="fw-normal mb-1">XX</p>
                  </td>
  
                  <td>
                    <lord-icon
                      src="https://cdn.lordicon.com/jmkrnisz.json"
                      trigger="hover"
                      colors="primary:#0ad5bd"
                      style={{ width: "50px", height: "50px" }}
                      
                    ></lord-icon>
                    <lord-icon
                      src="https://cdn.lordicon.com/hkkhwztk.json"
                      trigger="hover"
                      data-bs-toggle="modal" data-bs-target="#exampleModal1"
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
        </div>
        </div>
        </Sidebar>
  
        <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title agregar" id="exampleModalLabel">Agregar Estudiante</h5>
  
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                  <div class="form-outline">
                      <label class="form-label" for="typeText">NIE</label>
                      <input type="text" id="typeText" class="form-control mb-3" placeholder="NIE"  />
                      <label class="form-label" for="typeText">Nombre</label>
                      <input type="text" id="typeText" class="form-control mb-3" placeholder="Nombre" />
                      <label class="form-label" for="typeText">Apellidos</label>
                      <input type="text" id="typeText" class="form-control mb-3" placeholder="Apellidos" />
                      <label class="form-label" for="typeText">Edad</label>
                      <input type="number" id="typeText" class="form-control mb-3" placeholder="Edad" />
                      <label class="form-label" for="typeText">Correo</label>
                      <input type="email" id="typeText" class="form-control mb-3" placeholder="Correo" />
                      <label class="form-label" for="typeText">Foto</label>
                      <div class="input-group">
                          <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="foto" aria-label="Upload"/>
                        </div>
                        <label class="form-label" for="typeText">Centro Educativo</label>
                      <input type="text" id="typeText" class="form-control mb-3" placeholder="Centro Educativo" />
  
                    </div>
              </div>
               
                <button type="button" class="btn-add m-4">Agregar</button>
          
            </div>
          </div>
        </div>
    </>
  )
};

export default Estudiantes