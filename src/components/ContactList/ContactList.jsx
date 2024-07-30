import React from 'react'
import './ContactList.css'
import DATA from '../../dataContactos'
import Contacto from '../Contacto/Contacto.jsx'
import { useState } from 'react'

const ContactList = () => {

  const [busqueda, setBusqueda] = useState('')
  const [contactos, setContactos] = useState(DATA)


  const handleChange = (e) => {
    setBusqueda(e.target.value)
  }

  const filteredContactos = contactos.filter((contacto) => {
    return (
      contacto.nombre.toLowerCase().includes(busqueda.toLowerCase())
    )
  })

  return (
    <div className='contact-list-container'>
      <h1>Lista de Contactos</h1>
      <div className='search-add'>
        <input
          className='search-input'
          type="text"
          placeholder="Buscar Contactos"
          value={busqueda}
          onChange={handleChange} />
      </div>
      <hr />
      <div className='lista'>
        <ul>
          {filteredContactos.map((contacto) => {
            return (
              <li >
                <Contacto contacto={contacto} key={contacto.id}></Contacto>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default ContactList
