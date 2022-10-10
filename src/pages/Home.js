import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import ControlledCarousel from '../components/ControlledCarousel'

export default function Home() {

    return (
        <div className="home-container">
            <h3>Welcome to the Coctail website!</h3>
            <p>A carousel here</p>
            <ControlledCarousel />
        </div>
    )   
}