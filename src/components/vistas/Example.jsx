import React, { useEffect, useState } from 'react'
import axios from "axios";


const Example = () => {

    const [datosServidor, setDatosServidor] =  useState([]);

    console.log("Listar datos", datosServidor );

    useEffect(() => {
        async function getInfo() {
            const url = "https://jsonplaceholder.typicode.com/posts/";

            let config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json' 
                }
        };

        try {
            const resp = await axios.get(url, config);
            setDatosServidor(resp.data);
        } catch(err){
            console.error(err);
        }
    };
    getInfo();
}, []);
    
  return (
    <div>

        
<div class="container" id="ancho">
          <div class="row">
            <table class="table mb-0 bg-white" id="tabla">
              <thead class="bg-light" id="encabezadotabla">
              <tr>
                            <th>Usuario</th>
                            <th>Title</th>
                            <th>Descripción</th>
                          </tr>
                {
                    datosServidor.map((usuario) => {
                        return(
                            <tr>
                            <td>{usuario.id}</td>
                            <td>{usuario.title}</td>
                            <td>{usuario.body}</td>
                          </tr>
                        )
                    })
                }
              
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
  
              
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      

    </div>
  )
}

export default Example