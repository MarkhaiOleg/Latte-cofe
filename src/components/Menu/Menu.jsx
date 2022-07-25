import React from 'react'
import { useState } from 'react'
import ButtomMenuCard from './ButtomMenuCard'
import './Menu.css'
import TopMenuCard from './TopMenuCard'

const Menu = () => {
    const [topMenu, setTopMenu] = useState([

        {
            "id": "1",
            "name": "Avocado Pear Soup",
            "ingredients": "Avocado, Saratoga, SzechuanButton",
            "totalPrice": "$24",
        },
        {
            "id": "2",
            "name": "Rocket Raisin Salad",
            "ingredients": "Smoked Olive Oil, Fennel, Parmigino di Reggino",
            "totalPrice": "$18",
        },
        {
            "id": "3",
            "name": "Pepe alla Chitarra",
            "ingredients": "Spaghetti, Panetta, Pecorino Romano",
            "totalPrice": "$23",
        },
        {
            "id": "4",
            "name": "Chilli Lobster",
            "ingredients": "Served With Texas Toast",
            "totalPrice": "$42",
        }
    ])

    const [buttomMenu, setButtomMenu] = useState([

        {
            "id": "1",
            "name": "Avocado Pear Soup",
            "ingredients": "Avocado, Saratoga, SzechuanButton",
            "totalPrice": "$24",
        },
        {
            "id": "2",
            "name": "Rocket Raisin Salad",
            "ingredients": "Smoked Olive Oil, Fennel, Parmigino di Reggino",
            "totalPrice": "$18",
        },
        {
            "id": "3",
            "name": "Pepe alla Chitarra",
            "ingredients": "Spaghetti, Panetta, Pecorino Romano",
            "totalPrice": "$23",
        },
        {
            "id": "4",
            "name": "Chilli Lobster",
            "ingredients": "Served With Texas Toast",
            "totalPrice": "$42",
        },
        {
            "id": "5",
            "name": "Chilli Lobster",
            "ingredients": "Served With Texas Toast",
            "totalPrice": "$42",
        }
    ])
    return (
        <div className="menu">

            <div className="menu-left-side">
                <h4>Menu</h4>
                <p>We change our menu every season. Here is what we are currently dishing up.</p>
                <div className="buttons">
                    <button>Food Menu</button>
                    <button>Drinks Menu</button>
                    <button>Takeaway Menu</button>
                </div>
            </div>

            <div className="menu-right-side">
                <h2>LATTE CAFE</h2>
                <div className="top-menu">
                    <h3>Entres</h3>
                    {topMenu.map(topMenu =>
                        <TopMenuCard topMenu={topMenu} key={topMenu.id} />
                    )}
                </div>

                <div className="buttom-menu">
                    <h3>Mains</h3>
                    {buttomMenu.map(buttomMenu =>
                        <ButtomMenuCard buttomMenu={buttomMenu} key={buttomMenu.id} />
                    )}
                </div>
            </div>

        </div>

    )
}

export default Menu
