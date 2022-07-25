import React from 'react'
import './Appearance.css'
import RightImage from './img/img_right.png'
import LeftTopImage from './img/img_left_top.png'
import LeftButtomImage from './img/img_left_buttom.png'

const Appearance = () => {
    return (
        <div className="appearance">
            <div className="left-side">
                <img src={LeftTopImage} alt="" />
                <img src={LeftButtomImage} alt="" />
            </div>

            <div className="right-side">
                <img src={RightImage} alt="" />
            </div>
        </div >
    )
}

export default Appearance
