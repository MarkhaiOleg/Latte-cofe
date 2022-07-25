import './Header.css'
import { Coffee, Email, Facebook, Instagram } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'

const Header = () => {
    return (
        <div className="nav-bar">
            <div className="nav-logo">
                <Coffee />
                <h2>LATTE CAFE</h2>
            </div>

            <div className="nav-links">
                <a>About</a>
                <a>Menu</a>
                <a>Info</a>
                <a>Booking</a>
            </div>

            <div className="nav-icons">
                <IconButton>
                    <Instagram />
                </IconButton>
                <IconButton>
                    <Facebook />
                </IconButton>
                <IconButton>
                    <Email />
                </IconButton>
            </div>

        </div>

    )
}

export default Header
