import React from 'react'
import "./Mensaje.css"

const Mensaje = (props) => {
  return (
    <div className={`mensaje-${props.author == "Yo" ? "propio" : "ajeno"}`}>
        <span className='author'>{props.author}</span>
        <div className='content'>{props.content}</div>
        <div className='info-mensaje'>
            <span className='fecha'>{props.fecha}</span>
            <span className='estado'>{props.estado == "visto" ? <i className="bi bi-check-all visto"></i> : <i className="bi bi-check-all entregado"></i>}</span>
        </div>
    </div>
  )
}

export default Mensaje