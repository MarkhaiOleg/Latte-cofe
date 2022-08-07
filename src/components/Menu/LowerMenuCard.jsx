import React from 'react'
import './Menu.css'

const LowerMenuCard = (props) => {
    return (
        <div className="menu-card">
            <h4>{props.lowerMenu.name}</h4>
            <span>{props.lowerMenu.ingredients}</span>
            <span>{props.lowerMenu.totalPrice}</span>
        </div>
    )
}

export default LowerMenuCard
