import React from 'react'
import PNF from '../img/PNF.png'

export default function PageNotFound() {
    return (
        <div className='page-container'>
            <h3>404 Page not found</h3>
            <img src={PNF} width={210} height={210} alt='Page-Not-Found-Img' />
        </div>
    )
}