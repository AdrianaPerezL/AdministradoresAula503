import { React } from "react";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse";
import '../../assets/styles/navbar.css'


function Navbar() {
  return (
    
    <nav class="navbar navbar-expand-lg navbar-light ">
    <div class="container-fluid justify-content-end">
      <ul class="navbar-nav">
     
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle d-flex align-items-center"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
              class="rounded-circle"
              height="40"
              alt="Portrait of a Woman"
              loading="lazy"
            />
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li>
              <a class="dropdown-item" href="#">My profile</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Settings</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Logout</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
  );
}

export default Navbar;
