import React from 'react'
import './Footer.css'


const Footer = () => {
    return (
        <footer>
            <div className="footer-top">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Menu</a>
                <a href="">Info</a>
                <a href="">Contact</a>
                <a href="">Bookings</a>
                <a href="">Privacy Policy</a>
            </div>
            <div className="footer-bottom">
                <a href="">Style Guide</a>
                <a href="">Licenses</a>
                <a href="">Instructions</a>
                <a href="">Changelog</a>
                <a href="">Password</a>
                <a href="">404</a>
            </div>
            <div className="footer-finaly">
                <a href="">© Latte Cafe 2022.</a>
                <a href="">Built by Nikolai Bain</a>
                <a href="">Powered by Webflow</a>
            </div>
        </footer>
    )
}

export default Footer
