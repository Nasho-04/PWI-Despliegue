import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

const Header = (props) => {


  return (
    <div className='header'>
      <div className='info-contacto'>
        <Link to="/">
          <i className="bi bi-arrow-left"></i>
        </Link>
        <div className='profile-img'>
          <img src={"../" + props.perfil} alt="foto de perfil" />
        </div>
        <h2 className='nombre-contacto'>{props.nombre}</h2>
      </div>
      <div className='funcionalidades'>
        <i className="bi bi-camera-video"></i>
        <i className="bi bi-telephone"></i>
        <Link to={`/chat/${props.contacto.id}/detalles/${props.contacto.id}`}>
          <i className="bi bi-three-dots-vertical"></i>
        </Link>
      </div>
    </div>
  )
}

export default Header