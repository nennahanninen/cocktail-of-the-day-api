import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'

export default function CocktailOfTheDay() {
  const [cocktail, setCocktail] = useState('')
  const [cocktailPic, setCocktailPic] = useState('')
  const [cocktailInstructions, setCocktailInstructions] = useState('')
  const [glassType, setGlassType] = useState('')
  const [ingredients, setIngredients] = useState([])

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        setCocktail(response.data.drinks[0].strDrink)
        setCocktailPic(response.data.drinks[0].strDrinkThumb)
        setCocktailInstructions(response.data.drinks[0].strInstructions)
        setGlassType(response.data.drinks[0].strGlass)

        const tempIngredients = []

        if(response.data.drinks[0].strIngredient1 != null) { tempIngredients.push(response.data.drinks[0].strIngredient1)}
        if(response.data.drinks[0].strIngredient2 != null) { tempIngredients.push(response.data.drinks[0].strIngredient2)}
        if(response.data.drinks[0].strIngredient3 != null) { tempIngredients.push(response.data.drinks[0].strIngredient3)}
        if(response.data.drinks[0].strIngredient4 != null) { tempIngredients.push(response.data.drinks[0].strIngredient4)}
        if(response.data.drinks[0].strIngredient5 != null) { tempIngredients.push(response.data.drinks[0].strIngredient5)}
        if(response.data.drinks[0].strIngredient6 != null) { tempIngredients.push(response.data.drinks[0].strIngredient6)}
        if(response.data.drinks[0].strIngredient7 != null) { tempIngredients.push(response.data.drinks[0].strIngredient7)}
        if(response.data.drinks[0].strIngredient8 != null) { tempIngredients.push(response.data.drinks[0].strIngredient8)}
        if(response.data.drinks[0].strIngredient9 != null) { tempIngredients.push(response.data.drinks[0].strIngredient9)}
        if(response.data.drinks[0].strIngredient10 != null) { tempIngredients.push(response.data.drinks[0].strIngredient10)}
        if(response.data.drinks[0].strIngredient11 != null) { tempIngredients.push(response.data.drinks[0].strIngredient11)}
        if(response.data.drinks[0].strIngredient12 != null) { tempIngredients.push(response.data.drinks[0].strIngredient12)}
        if(response.data.drinks[0].strIngredient13 != null) { tempIngredients.push(response.data.drinks[0].strIngredient13)}
        if(response.data.drinks[0].strIngredient14 != null) { tempIngredients.push(response.data.drinks[0].strIngredient14)}
        if(response.data.drinks[0].strIngredient15 != null) { tempIngredients.push(response.data.drinks[0].strIngredient15)}
      
        setIngredients(tempIngredients)

      })
      .catch((error) => {
        alert(error)
      })
  }, [])

  return (
    <div className='page-container'>
      <h3>Cocktail of the day is:</h3>
      <h4>{cocktail}</h4>
      <div className='card-container'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant='top' src={cocktailPic} />
          <Card.Body>
            <br />
            <Card.Subtitle className='mb-2 text-muted'>Glass</Card.Subtitle>
            <Card.Text>{glassType}</Card.Text>
            <br />
            <Card.Subtitle className='mb-2 text-muted'>Ingredients</Card.Subtitle>
            <table className='table'>
                {ingredients.map(ingredient => (
                  <tbody>
                  <tr>
                    <td className='coctail-emoji'>🍸</td>
                    <td key={ingredient} className='cocktail-list'>{ingredient}</td>
                  </tr>
                  </tbody>
                ))}
            </table>
            <br />
            <Card.Subtitle className='mb-2 text-muted'>Instructions</Card.Subtitle>
            <Card.Text>{cocktailInstructions}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}
