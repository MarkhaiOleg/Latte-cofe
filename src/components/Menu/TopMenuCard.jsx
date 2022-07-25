import React from 'react'
import './Menu.css'

const TopMenuCard = (props) => {
    return (
        <div className="menu-card">
            <h4>{props.topMenu.name}</h4>
            <span>{props.topMenu.ingredients}</span>
            <span>{props.topMenu.totalPrice}</span>
        </div>
    )
}

export default TopMenuCard;
