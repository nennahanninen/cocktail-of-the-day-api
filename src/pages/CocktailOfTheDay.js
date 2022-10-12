import React from "react"
import axios from "axios"
import { useEffect, useState } from "react"
import Card from "react-bootstrap/Card"

const URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php"

export default function CocktailOfTheDay() {
  const [cocktail, setCocktail] = useState("")
  const [cocktailPic, setCocktailPic] = useState("")
  const [cocktailInstructions, setCocktailInstructions] = useState("")
  const [glassType, setGlassType] = useState("")
  const [ingredients, setIngredients] = useState([])

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        setCocktail(response.data.drinks[0].strDrink)
        setCocktailPic(response.data.drinks[0].strDrinkThumb)
        setCocktailInstructions(response.data.drinks[0].strInstructions)
        setGlassType(response.data.drinks[0].strGlass)
        setIngredients(response.data.drinks[0])
      })
      .catch((error) => {
        alert(error)
      })
  }, [])

  return (
    <div className="page-container">
      <h3>Cocktail of the day is:</h3>
      <h4>{cocktail}</h4>
      <div className="card-container">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={cocktailPic} />
          <Card.Body>
            <br />
            <Card.Subtitle className="mb-2 text-muted">Glass</Card.Subtitle>
            <Card.Text>{glassType}</Card.Text>
            <br />
            <Card.Subtitle className="mb-2 text-muted">Ingredients</Card.Subtitle>
            <ul>
              <li className="cocktail-list">🍸 here ingredients as a list</li>
            </ul>
            <br />
            <Card.Subtitle className="mb-2 text-muted">
              Instructions
            </Card.Subtitle>
            <Card.Text>{cocktailInstructions}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}
