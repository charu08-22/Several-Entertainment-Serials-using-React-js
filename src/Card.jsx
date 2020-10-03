import React from 'react';
import Image from './Image'

function Card(props)
{
  console.log(props);
  return (
  <>
  <div className="cards">
    <div className="card">
      <div className="sides">
        <div className="card_image">
          <Image imgsrc = {props.imgsrc}/>
        </div>
        <div className="card_info">
          <div>
          <h3 className="card_title">{props.name}</h3>
          <div className="card_category">{props.title}</div>
        <a href={props.link} target="_blank">
          <button className="btn">Watch Now</button>
        </a>
        </div>
      </div>
      </div>
    </div>
  </div>
  </>)
};

export default Card;