


import React, { useState } from 'react'
import Card from './Components/Card';
import CardDetails from './Components/CardDetails';
import './App.css';
// Container for card components
const App = () => {
  const cardsData = [
    {
      title: "Fix login bug",
      description: "Users are unable to log in using their email credentials after the latest update.",
      priority: "High"
    },
    {
      title: "Update landing page",
      description: "Redesign the hero section of the homepage to improve conversion rates.",
      priority: "Medium"
    },
    {
      title: "Write unit tests",
      description: "Add unit tests for the new payment module.",
      priority: "Low"
    },
    {
      title: "Database optimization",
      description: "Optimize SQL queries to reduce load times on the dashboard.",
      priority: "High"
    },
    {
      title: "Team meeting",
      description: "Schedule a sprint planning meeting with the dev team.",
      priority: "Medium"
    },
    {
      title: "Create onboarding guide",
      description: "Draft an onboarding document for new engineering hires.",
      priority: "Low"
    },
    {
      title: "Fix mobile layout",
      description: "Correct layout issues on the iPhone Safari browser.",
      priority: "High"
    }
  ];
  // State to track the selected card
  const [selectedCard, setSelectedCard] = useState(null)
  // Handler for viewing card details
  const handleViewDetails = (card) => {
    setSelectedCard(card)
    console.log(selectedCard);
  }
  return (
    <div className='app'>
      <h1>Task Cards</h1>
      <div className='cards-grid'>
        {cardsData.map((card, index) => {
          return <Card
            // Using the array index as a key
            key={index}
            // Passes the entire cards object as a prop
            card={card}
            onViewDetails={handleViewDetails}
          />
        })}
      </div>
      {/* Card details displays on screen when button is clicked */}
      {selectedCard && (
        <CardDetails
          card={selectedCard}
        />
      )}
    </div>
  )
}

export default App




