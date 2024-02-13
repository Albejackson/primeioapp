import React from 'react'
import './styles.css'

function Button({name, active, onClick}){
    return(
        <div className='containerButton'>
        <button onClick={() => onClick(30)} className={active ? 'button' : 'disableButton'}>{name}</button>
        <span>Seus dados estão salvos</span>
        </div>
    )
}


export default Button;