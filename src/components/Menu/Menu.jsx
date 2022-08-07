import React from 'react'
import { useState } from 'react'
import LowerMenuCard from './LowerMenuCard'
import './Menu.css'
import TopMenuCard from './TopMenuCard'
import topMenuData from '../../data/topMenuData'
import lowerMenuData from '../../data/lowerMenuData'

const Menu = () => {
    const [topMenu, setTopMenu] = useState(
        topMenuData
    )

    const [lowerMenu, setLowerMenu] = useState(
        lowerMenuData
    )

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
                    {lowerMenu.map(lowerMenu =>
                        <LowerMenuCard lowerMenu={lowerMenu} key={lowerMenu.id} />
                    )}
                </div>
            </div>

        </div>

    )
}

export default Menu
