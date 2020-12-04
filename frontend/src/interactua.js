import React, { useState } from 'react';
import './interactua.css';
import { Link } from 'react-router-dom';

function Interactua() {
    const [isActive, setIsActive] = useState(false)
    const [status, setStatus] = useState("ON")
    const [time, setTime] = useState(15000)

    async function submitData(e) {
        e.preventDefault()
        setIsActive(!isActive)
        setStatus("OFF")

        console.log('Se envio el status', status)
        console.log('Se envio el tiempo', time)
        await fetch('http://localhost:3002/arduino', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status, time })
        })
    }
    document.body.style = "background: gray;";

    return (

        <div className='interactua'>

            <div className='imageninter'>
                
                <Link to='/menu'><img src='menu.png' width='45px' height='50px' /></Link>

            </div>

            <div className='imageninter2'>

                <Link to='/notirec2'><img src='wifi.png' width='50px' height='50px' /></Link>

            </div>

            <div className='titulointer'>

                <h2><center>INTERACTÚA CON TU CULTIVO</center></h2>

            </div>

            <div className='titulo2inter'>

                <h3>ENCENDIDO</h3>

            </div>

            <div className='encendidointer'>

                <button onClick={(e) => submitData(e)} type="button" className="btn btn-success">
                    {isActive ? 'ON' : 'OFF'}
                </button>

            </div>

            <div className='titulo3inter'>

                <h3>APAGAR EN</h3>

            </div>

            <div className='titulo5inter'>

                <button type="button" className="btn btn-success ">{time}</button>

            </div>

            {/* <div className='titulo4inter'>

                <h3>HUMEDAD</h3>

            </div> */}

            {/* <div className='titulo4inter'>

                <button type="button" class="btn btn-success btn-lg">18%</button>

            </div> */}

        </div>
    );
}

export default Interactua;