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
        <Navbar />
       
      </Sidebar>
    </>
  );
};

export default Materias;
