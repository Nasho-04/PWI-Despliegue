import React from 'react'
import { Link, useParams } from 'react-router-dom'
import DATA from '../../dataContactos'
import './Detalles.css'

const Detalles = () => {

    const { id } = useParams()
    const contacto = DATA.find((contacto) => contacto.id === Number(id))
    console.log(contacto)

    return (
        <div className='detalles'>
            <div className='info-detalles'>
                <Link to={"/chat/" + contacto.id} className='back'><i className="bi bi-arrow-left"></i></Link>
                <i className='bi bi-three-dots-vertical icono-absolute'></i>
                <div className='img-container'><img src={"../../../" + contacto.img} alt="imagen de contacto" /></div>
                <h2>{contacto.nombre}</h2>
                <p>{contacto.telefono}</p>
                <div className='boxes-container'>
                    <div className="boxes">
                        <i className='bi bi-telephone'></i>
                        <span>Llamar</span>
                    </div>
                    <div className="boxes">
                        <i className='bi bi-camera-video'></i>
                        <span>Video</span>
                    </div>
                    <div className="boxes">
                        <i class="bi bi-search"></i>
                        <span>Buscar</span>
                    </div>
                </div>
            </div>
            <div className='descripcion'>
                <p>{contacto.descripcion.content}</p>
                <span>{contacto.descripcion.fecha}</span>
            </div>
            <div className='proximamente'>

            </div>
        </div>
    )
}

export default Detalles