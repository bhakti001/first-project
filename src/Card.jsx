import React from 'react'
const img= "https://wallpapercave.com/wp/wp4056410.jpg";
const category= "A Netflix Orignal Series";
const a = "https://www.netflix.com/in/title/80990668?source=35";
const title= "Dark";
function Card() {
  return (
      <>
        <div className="cards">
          <div className="card">
            <img
              src={img}
              alt="mypic"
              className="card__img"
            />
            <div className="card__info">
              <span className="card__category">{category}</span>
              <h3 className="card__title">{title}</h3>
              <a href={a} target="__blank">
                <button className="Btn">Watch Now</button>
              </a>
            </div>
          </div>
   
        </div>
      </>
  )
}
export default Card;