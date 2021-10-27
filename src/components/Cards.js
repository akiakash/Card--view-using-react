import React from 'react'
import Carditem from './Carditem'
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1> Check out the epic destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                    <Carditem
                        src='image1.jpg'
                        text='Explore the hidden waterfall deep inside the Amazon Jungle'
                        label='react'
                        path='/'
                        />
                        <Carditem
                        src='image2.jpg'
                        text='Explore the hidden waterfall deep inside the Amazon Jungle'
                        label='Adventure'
                        path='/'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
