import './Card.css'

import React from 'react'

// Use destructuring to extract the card object from the props
const Card = ({ card, onViewDetails }) => {
    return (
        <div className='card'>
            {/* Displays card title */}
            <h3 className='card-title'>{card.title}</h3>
            <button
            className='button'
            onClick={() => onViewDetails(card)}>View Details</button>

        </div>
    )
}

export default Card
