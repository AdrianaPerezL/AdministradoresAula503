import React from 'react'
import Navbar from './Navbar'
import '../../assets/styles/Estudiantes.css'

const Estudiantes = () => {
  return (
    <>
    <Navbar/>
      <h4 class="headingChart">Perfiles registrados</h4>
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
    </>
  )
}

export default Estudiantes