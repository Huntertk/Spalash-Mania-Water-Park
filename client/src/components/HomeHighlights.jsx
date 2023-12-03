import React from 'react'
import '../styles/homeHighlights.scss';
import { cardHighLightsDetails } from '../data';
const Cards = () => {
  
    return  (
        cardHighLightsDetails.map((data) => {
            return <div className="card" key={data.id}>
                <img src={data.image} alt="" />
                <div className="content">
                    <h3>{data.title}</h3>
                    <p>{data.desc}</p>
                </div>
            </div>
        })
    )
} 

const HomeHighlights = () => {
  return (
    <section className='HomeHighlightsMainContainer'>
        <h1>Zones Inside Genting SkyWorlds Theme Park</h1>
        <p>Genting SkyWorlds theme park has 26 rides in nine zones. Each zone is inspired by either a beloved movie or an adventure theme.</p>
        <div className="cardMainContainer">
            <Cards />
        </div>
    </section>
  )
}

export default HomeHighlights