import React from 'react'
import './Contacto.css'
import { Link } from 'react-router-dom'

const Contacto = ({ contacto }) => {

  const mensajesGuardados = JSON.parse(localStorage.getItem(contacto.nombre))
  if (!mensajesGuardados) {
    localStorage.setItem(contacto.nombre, JSON.stringify(contacto.mensajes))
  }
  const lastMessage = mensajesGuardados[mensajesGuardados.length - 1].content

  return (

    <div className='contacto'>
      <div className='contact-img-container'>
        <img className='img' src={contacto.img} alt="foto de perfil" />
      </div>
      <div className='info-contactos'>
        <Link className='link' to={`/chat/${contacto.id}`} mensajes={contacto.mensajes}>
          <h2>{contacto.nombre}</h2>
        </Link>
        <p className='ultimo-mensaje'>
          {lastMessage}
        </p>

      </div>
    </div>
  )
}

export default Contacto