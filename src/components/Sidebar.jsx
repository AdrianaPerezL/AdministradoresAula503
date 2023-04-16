import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../assets/img/logo1.png'
import '../assets/styles/sidebar.css'
import { faHouse, faUsers, faBook, faPager, faBars, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'



const Sidebar = ({children}) => {

  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  const menuItem = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: <FontAwesomeIcon className='fs-5 me-3' icon={faHouse} />

    },
    {
      path: "/cuestionarios",
      name: "Cuestionarios",
      icon: <FontAwesomeIcon className='fs-5 me-3' icon={faPager} />
  },
  {
    path: "/estudiantes",
    name: "Estudiantes",
    icon: <FontAwesomeIcon className='fs-5 me-3' icon={faUsers} />

},
{
  path: "/materias",
  name: "Materias",
  icon: <FontAwesomeIcon className='fs-5 me-3' icon={faBook} />
},
  ]
  return (
    <div className='containerSidebar'>
      <div style={{width: open ? "250px" : "50px"}} className="sidebar">
        <div className="top-section">
        
            <img style={{display: open ? "block" : "none"}} src={logo} width="50px" alt="" />
      
          <div style={{marginLeft: open ? "50%" : "0"}}  className="bars">
          <FontAwesomeIcon icon={faBars} onClick={toggle} />
          </div>
        </div>
        {
          menuItem.map((item, index)=>(
            <NavLink to={item.path} key={index} className="link" activeclassName="active">
              <div className="icon">{item.icon}</div>
              <div style={{display: open ? "block" : "none"}} className="link-text">{item.name}</div>
            </NavLink>
          ))
        }
      </div>
        <main className='mainChildren'>{children}</main>
    </div>
  )
}

export default Sidebar;
