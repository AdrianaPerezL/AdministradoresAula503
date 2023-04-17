
import React from "react";
import Navbar from "./Navbar";
import Sidebar from "../Sidebar";
import { useEffect } from "react";
import "../../assets/styles/materias.css";

const Materias = () => {
  useEffect(() => {
    document.title = "Administrador | Materias";
  }, []);

  return (
    <>
    <Sidebar>
    <Navbar/>
    <h1 class="titprin">Materias</h1>
    <button id="botonindicaciones" /* onClick={() =>mostrarAlerta()} */>Agregar
    <lord-icon src="https://cdn.lordicon.com/ejxwvtlg.json" trigger="hover" colors="outline:#ffffff,primary:#572ab0,secondary:#ffffff" style={{width: '50px', height: '50px'}}
    data-bs-toggle="modal" data-bs-target="#exampleModal1">
      </lord-icon>
    </button>
    <div class="container" id="ancho">
        <div class="row">
          <table class="table mb-0 bg-white" id="tabla">
            <thead class="bg-light" id="encabezadotabla">
              <tr>
                <th>#</th> {/* 1 */}
                <th>Nombre</th> {/* 2 */}
                <th>Icono</th> {/* 3 */}
                <th>Grado</th> {/* 4*/}
                <th>Cuestionarios</th> {/* 5 */}
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>  {/* 1 */}

                <td>
                <p>Biologia</p> {/* 2 */}
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

              </tr>
            </tbody>
          </table>
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
  );
};

export default Materias;
