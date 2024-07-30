import React from 'react'
import './Chat.css'
import Mensaje from '../Mensaje/Mensaje'
import Header from '../Header/Header'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import DATA from '../../dataContactos'

const Chat = () => {

  const { id } = useParams();
  const contacto = DATA.find((contacto) => contacto.id === Number(id))
  const perfil = contacto.img

  const [chat, setChat] = useState(contacto.mensajes)
  const [mensajeValue, setMensaje] = useState('')
  
  if (!localStorage.getItem(contacto.nombre)) {
    localStorage.setItem(contacto.nombre, JSON.stringify(chat))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newChat = {
      author: 'Yo',
      content: mensajeValue,
      fecha: 'ahora',
      estado: 'entregado',
      id: Math.random()
    }
    if (mensajeValue) {
      setChat([...chat, newChat])
      localStorage.setItem(contacto.nombre, JSON.stringify([...chat, newChat]))
    }
    setMensaje('')
  }

  return (

    <div className='chat'>
      <Header nombre={contacto.nombre} perfil={perfil} contacto={contacto}></Header>
      <div className='contenedor-mensajes'>
        {localStorage.getItem(contacto.nombre) && JSON.parse(localStorage.getItem(contacto.nombre)).map((mensaje) => {
          return (
            <Mensaje
              author={mensaje.author}
              content={mensaje.content}
              fecha={mensaje.fecha}
              estado={mensaje.estado}
              id={mensaje.id}
            >
            </Mensaje>
          )
        })}
      </div>
      <div className='footer'>
        <form
          onSubmit={handleSubmit}
          className='input-container'
        >
          <i className="bi bi-emoji-smile icon emoji"></i>
          <input
            className='msg-input'
            type="text"
            placeholder='Mensaje'
            name='mensaje'
            id='mensaje'
            value={mensajeValue}
            onChange={(e) => setMensaje(e.target.value)}
          />
          <i className="bi bi-paperclip icon clip"></i>
          <i className="bi bi-camera icon camara"></i>
          <button
            className='submit-btn'
            type='submit'
          >
            <i className="bi bi-send-fill"></i>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Chat