import React from 'react'
import Navbar from './Navbar'
import '../../assets/styles/Estudiantes.css'
import Sidebar from '../Sidebar'
import { useEffect } from 'react'

const Estudiantes = () => {
  useEffect(() => {
    document.title = "Administrador | Estudiantes"
  }, []);

  return (
    <>
  <Sidebar>
    <Navbar/>
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
                    colors="primary:#0ad5bd"
                    style={{ width: "50px", height: "50px" }}
                  ></lord-icon>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </Sidebar>
    </>
  )
}

export default Estudiantes