import React from 'react'
import CardItem from './../CardItem/CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="../images/fitness.jpg"
                        title="Courses"
                        path='/'
                        
                        label="Courses"
                        />
                        <CardItem 
                        src="../images/train.jpg"
                        title="Programs"
                        path='/'
                        
                        label="Programs"
                        />
                        <CardItem 
                        src="../images/muscu.jpg"
                        title="Train"
                        path="/"
                        
                        label="Train"
                        />
                        <CardItem 
                        src="../images/store.jpg"
                        title="Store"
                        path="/"
                        
                        label="Store"
                        />
                    </ul>
                </div>
            </div>         
        </div>
    )
}

export default Cards;

