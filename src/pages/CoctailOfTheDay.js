import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'

export default function CoctailOfTheDay() {
    const [coctail, setCoctail] = useState('')
    const [coctailPic, setCoctailPic] = useState('')
    const [coctailInstructions, setCoctailInstructions] = useState('')

    useEffect(() => {
        axios.get(URL)
        .then((response) => {
            const c = response.data.drinks[0].strDrink
            const pic = response.data.drinks[0].strDrinkThumb
            const instruction = response.data.drinks[0].strInstructions
            setCoctail(c)
            setCoctailPic(pic)
            setCoctailInstructions(instruction)
        }).catch(error => {
            alert(error)
        })
    }, [])
    

    return (
      <div className="container">
        <h3>The Coctail of the Day is:</h3>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={coctailPic} />
          <Card.Body>
            <Card.Title>{coctail}</Card.Title>
            <Card.Text>{coctailInstructions}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );   
}