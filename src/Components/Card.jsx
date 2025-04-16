import React from 'react'



const Card = ({ title, description, priority, onSelect }) => {
    return (
        <div>
            <h3>{title}</h3>
            {/* <div>{description}</div> */}
            {/* <div>{priority}</div> */}
            <button onClick={onSelect} >View Details</button>            
        </div>


    )
}

export default Card