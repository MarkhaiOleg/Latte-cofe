import React from 'react'
import './Menu.css'

const ButtomMenuCard = (props) => {
    return (
        <div className="menu-card">
            <h4>{props.buttomMenu.name}</h4>
            <span>{props.buttomMenu.ingredients}</span>
            <span>{props.buttomMenu.totalPrice}</span>
        </div>
    )
}

export default ButtomMenuCard
