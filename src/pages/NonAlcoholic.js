import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'

export default function NonAlcoholic() {

    const [drinks, setDrinks] = useState([])
    const [query, setQuery] = useState('')

    useEffect(() => {
        axios.get(URL)
        .then((response) => {
           setDrinks(response.data.drinks)
        }).catch(error => {
            alert(error)
        })
    }, [])
    
    //console.log(query)
    //console.log(drinks.filter(drink => drink.strDrink.toLowerCase().includes(query)))

    return (
      <div className='page-container'>
        <h3>List of non-alcoholic drinks:</h3>
        <form>
            <input type='text' className='search' placeholder='Search...' onChange={e => setQuery(e.target.value)}/>
            <button className='search-button' type='button'>&#8594;</button>
        </form>
        <br />
        <Row xs={2} md={3} className='g-4'>
          {drinks.filter(drink => drink.strDrink.toLowerCase().includes(query)).map((drink) => (
            <Col key={drink.idDrink}>
              <Card>
                <Card.Img variant='top' src={drink.strDrinkThumb} />
                <Card.Title className='card-title'>{drink.strDrink}</Card.Title>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    )
}