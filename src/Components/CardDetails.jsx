import React from 'react'

// Display information about the selected card
const CardDetails = ({ card }) => {
    return (
        <div>
            <div className='card-details'>
                <h1>{card.title}</h1>
            </div>
            <div className='detail-section'>
                <p>{card.description}</p>
            </div>
            <div className='detail-section'>
                <p>{card.priority}</p>
            </div>
        </div>
    )
}

export default CardDetails