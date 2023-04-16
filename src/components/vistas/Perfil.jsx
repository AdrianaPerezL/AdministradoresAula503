import React from 'react'
import '../../assets/styles/perfil.css'
import Navbar from './Navbar'
import Sidebar from '../Sidebar'
import { useState } from 'react'


export const Perfil = () => {
    const editPerfil = {
        fechaNacimiento: "",
        foto: "",
        escuela: "",
        grado: ""
      }
    
      const initialStateInput = {
        input: "",
        message: '',
        state: false
      }
    
      const [editar, setEditar] = useState(editPerfil);
    
      const [alerta, setAlerta] = useState([initialStateInput]);
    
      const ManejarEventoDeInputs = (e) =>{
        //la propiedad target del event nos permitirá obtener los valores
        const name = e.target.name;
        const value = e.target.value;
    
      //actualizamos los valores capturados a nuestro estado de formulario
      setEditar({...editar, [name]: value});
    }
    
    const handleEditSession = (e) =>{
      e.preventDefault();
    
      let verificarInputs = [
        {nombre: "fechaNacimiento", value: editar.fechaNacimiento},
        {nombre: "foto", value: editar.foto},
        {nombre: "escuela", value: editar.escuela},
        {nombre: "grado", value: editar.grado},
      ];
    
      const datosValidados = ValidarInputs(verificarInputs)
    
      setAlerta(datosValidados);
    
      const totalValidaciones = datosValidados.filter(input => input.estado === false).map
      ((estado) => {return false});
    
      if(totalValidaciones.length >=1){
        console.log("Enviar al servidor");
      }
     };
    
     const ValidarInputs = (data) =>{
      console.log(data);
    
      let errors = [];
    
      const datosDelFormulario = data;
    
      datosDelFormulario.map((valorInput) =>{
        switch(valorInput.nombre){
          case 'fechaNacimiento': {
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
      
          case 'foto': {
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
    
          case 'escuela': {
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
        <div className="container">
    <div className="main-body">
   
      <div className="row gutters-sm">
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-column align-items-center text-center">
                <img src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png" alt="" className="rounded-circle" width={150} />
                <div className="mt-3">
                  <h4>Adriana Pérez</h4>
                  <p className="text-secondary mb-1">Estudiante</p>
                  <p className="text-muted font-size-sm">1° año</p>
                  <button className="btn btn-edit" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
                </div>
              </div>
            </div>
          </div>
         
        </div>
{/* Modal */}
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" onSubmit={handleEditSession}>
        <div class="modal-dialog">
          <div class="modal-content ">
            <div class="modal-header">
                <h5 class="modal-title agregar" id="exampleModalLabel">Editar mi perfil</h5>

              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="form-outline" >
                    <form onSubmit={handleEditSession}>
                    <label class="form-label mt-1" for="typeText">Fecha de nacimiento</label>
                    <input type="date" id="typeText" class="form-control mb-3" placeholder="fecha" name='fechaNacimiento' onChange={ManejarEventoDeInputs} value={editar.fechaNacimiento}/>
                    {
                    alerta.filter(input => input.valorInput == "fechaNacimiento" && input.estado === true).map(message => (
                      <div>
                        <span className='text-danger'>{message.mensaje}</span>
                      </div>
                    ))
                  }
                    <label class="form-label mt-1" for="typeText">Foto</label>
                    <div class="input-group">
                        <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="foto" aria-label="Upload" name='foto' onChange={ManejarEventoDeInputs} value={editar.foto}/>
                        {
                    alerta.filter(input => input.valorInput == "foto" && input.estado === true).map(message => (
                      <div>
                        <span className='text-danger'>{message.mensaje}</span>
                      </div>
                    ))
                  }
                      </div>
                      <label class="form-label mt-1" for="typeText">Centro Educativo</label>
                    <input type="text" id="typeText" class="form-control mb-3" placeholder="Centro Educativo" name='escuela'onChange={ManejarEventoDeInputs} value={editar.escuela}/>
                    {
                    alerta.filter(input => input.valorInput == "escuela" && input.estado === true).map(message => (
                      <div>
                        <span className='text-danger'>{message.mensaje}</span>
                      </div>
                    ))
                  }
                      <label class="form-label mt-1" for="typeText">Grado</label>
                    <input type="text" id="typeText" class="form-control mb-3" placeholder="Grado" name='grado' onChange={ManejarEventoDeInputs} value={editar.grado}/>
                    {
                    alerta.filter(input => input.valorInput == "grado" && input.estado === true).map(message => (
                      <div>
                        <span className='text-danger'>{message.mensaje}</span>
                      </div>
                    ))
                  }

                    <button type="submit" class="btn-edit m-4 p-2">Editar</button>

                  </form>
                  </div>
            </div>
             
        
          </div>
        </div>
      </div>


        <div className="col-md-8">
          <div className="card mb-3">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Nombre</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  Adriana Pérez
                </div>
              </div>
              
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">NIE</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  0123456789
                </div>
              </div>
              
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Correo</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  a@gmail.com
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Fecha de nacimiento</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  1 enero 2000
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Institución</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  Centro Escolar ...
                </div>
              </div>
              <hr />
             
              <div className="row">
                <div className="col-sm-12">
                </div>
              </div>
            </div>
          </div>
          
                  
        </div>
      </div>
    </div>
  </div>
        </Sidebar>
    </>
    )
}

export default Perfil