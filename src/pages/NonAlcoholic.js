import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const URL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"

export default function NonAlcoholic() {
    
    const [drinks, setDrinks] = useState([])

   useEffect(() => {
        axios.get(URL)
        .then((response) => {
           setDrinks(response.data.drinks)
        }).catch(error => {
            alert(error)
        })
    }, [])
    
    return (
      <div className="page-container">
        <h3>List of non-alcoholic drinks:</h3>
        <Row xs={2} md={3} className="g-4">
          {drinks.map((_, id) => (
            <Col key={id}>
              <Card>
                <Card.Img variant="top" src={drinks[id].strDrinkThumb} />
                <Card.Title className="card-title">{drinks[id].strDrink}</Card.Title>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    )
}