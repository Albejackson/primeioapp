import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '..//../assets/logo.png'
import './style.css'


function Comentarios(){
    
    
    return(
        <>
        <header>
            <img id='logo' src={logo} />
            <nav>

                <ul>
                    <Link style={{textDecoration: 'none'}} to='/'>
                    <li>Home</li>
                    </Link>

                    <Link style={{textDecoration: 'none'}} to='/fotos'>
                    <li>Fotos</li>
                    </Link>

                    <Link style={{textDecoration: 'none'}} to='/contato'>
                    <li>Contato</li>
                    </Link>

                    <Link style={{textDecoration: 'none'}} to='/comentarios'>
                    <li>Comentários</li>
                    </Link>
                </ul>

            </nav>

        </header>

        <div>
        <label for="story">Comente aqui!</label>

        <textarea id='caixa' name="textarea" rows="10" cols="50" placeholder="Escreva seu comentário aqui..."></textarea>
        </div> 

        <div id="enviar">
            <button>Enviar</button>
        </div>
    </>
    )
}

export default Comentarios;