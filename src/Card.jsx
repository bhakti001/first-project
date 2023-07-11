import React from 'react'
import { Data } from './utils/Comon';

// const img= "https://wallpapercave.com/wp/wp4056410.jpg";
// const category= "A Netflix Orignal Series";
// const a = "https://www.netflix.com/in/title/80990668?source=35";
// const title= "Dark";
// const text = "Dark is a German science fiction thriller television series co-created by Baran bo Odar and Jantje Friese. The story follows characters from the fictional town of Winden,  as they pursue the truth in the aftermath of a child's disappearance. They follow connections between four estranged families to unravel a sinister time travel conspiracy that spans several generations."
function Card() {
  return (
      <>
      { Data.map((Data) => {
        return(
        <div className="cards">
          <div className="card">
            <img
              src={Data.img}
              alt="mypic"
              className="card__img"
            />
            <div className="card__info">
              <span className="card__category">{Data.category}</span>
              <h5 style={{padding:'1px',color:'gray'}}>{Data.text}</h5>
              <h3 className="card__title">{Data.title}</h3>
              <h5 style={{padding:'15px'}}>{Data.text1}</h5>
              <a href={Data.a} target="__blank">
                <button className="button">Watch Now</button>
              </a>
            </div>
          </div>
        </div>)})}
      </>
  )
}
export default Card;