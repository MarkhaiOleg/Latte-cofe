import React from 'react'
import './WorkingHours.css'

const WorkingHours = () => {
    return (
        <div className="working-hours">
            <div className="working-hours-item">
                <h2>Location</h2>
                <span>101 Cuba St,<br />Te Aro, Wellington</span>
            </div>

            <div className="working-hours-item">
                <h2>Hours</h2>
                <span>Tuesday to Friday <br />7AM - 3PM</span>
                <span>Saturday to Sunday <br />8AM - 3PM</span>
            </div>

            <div className="working-hours-item">
                <h2>Mondays?</h2>
                <span>We are closed on Mondays to reflect and refuel</span>
            </div>
        </div>
    )
}

export default WorkingHours
