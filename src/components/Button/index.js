import React from 'react'
import './button.css'
const Button = ({fill = "#000", color = "#fff", text = "", onClick = () => {}, contained = false, className = ""}) => {
    return (
        <button className={className} id="button" style={{background: contained &&  fill , borderColor: fill}} onClick={onClick}>
            <span style={{color}}>{text}</span>
        </button>
    )
}

export default Button;