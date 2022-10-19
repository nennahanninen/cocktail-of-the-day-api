import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

export default function Home() {
    
    const [m, setM] = useState([])
    const [n, setN] = useState([])
    const [w, setW] = useState([])

    const fetchData = () => {
        const mojito = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mojito'
        const negroni = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=negroni'
        const whiskeysour = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=whiskey'

        const getMojito = axios.get(mojito)
        const getNegroni = axios.get(negroni)
        const getWhiskeySour = axios.get(whiskeysour)
        axios.all([getMojito, getNegroni, getWhiskeySour])
        .then(axios.spread((...allData) => {
            const allMojitoData = allData[0].data.drinks[0]
            const allNegroniData = allData[1].data.drinks[0]
            const allWhiskeySourData = allData[2].data.drinks[0]
            console.log(allMojitoData)
            console.log(allNegroniData)
            setM(allMojitoData)
            setN(allNegroniData)
            setW(allWhiskeySourData)
        }))
        .catch((err) => {
          console.log(err.message)
         })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
      <div className='page-container'>
        <h3>Welcome to the Cocktail website!</h3>
        <h4>Most popular cocktails:</h4>
        <CardGroup>
          <Card>
            <Card.Img variant='top' src={m.strDrinkThumb} />
            <Card.ImgOverlay>
              <Card.Title className='card-title-home'>{m.strDrink}</Card.Title>
            </Card.ImgOverlay>
          </Card>
          <Card>
            <Card.Img variant='top' src={n.strDrinkThumb} rounded />
            <Card.ImgOverlay>
              <Card.Title className='card-title-home'>{n.strDrink}</Card.Title>
            </Card.ImgOverlay>
          </Card>
          <Card>
            <Card.Img variant='top' src={w.strDrinkThumb} />
            <Card.ImgOverlay>
              <Card.Title className='card-title-home'>{w.strDrink}</Card.Title>
            </Card.ImgOverlay>
          </Card>
        </CardGroup>
      </div>
    )
}