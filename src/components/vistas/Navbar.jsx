import { React, useState } from "react";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse";
import '../../assets/styles/navbar.css'


function Navbar() {

  const [toggle, setToggle] = useState(false);

  const Toggle = () => {
    if (toggle === true) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };


  return (
    
    <nav class="navbar navbar-expand-lg navbar-light ">
    <div class="container-fluid justify-content-end">
      <ul class="navbar-nav">
     
        <li class="nav-item dropdown position-relative">
          <a
            class="nav-link dropdown-toggle d-flex justify-content-end align-items-center"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
            onClick={Toggle}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
              class="rounded-circle"
              height="40"
              alt="Portrait of a Woman"
              loading="lazy"
            />
          </a>
          {toggle && (
            <ul class="dropdown-menu show position-absolute" aria-labelledby="navbarDropdownMenuLink" id="dropdown" style={{left: "-100px"}}>
          
            <li>
              <a class="dropdown-item" href="#">Logout</a>
            </li>
          </ul>
          )}
        </li>
      </ul>
    </div>
  </nav>
  );
}

export default Navbar;
