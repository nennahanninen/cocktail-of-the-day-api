import React from 'react'
import ControlledCarousel from '../components/ControlledCarousel'

export default function Home() {

    return (
        <div className="page-container">
            <h3>Welcome to the Cocktail website!</h3>
            <p>A carousel here</p>
            <ControlledCarousel />
        </div>
    )   
}