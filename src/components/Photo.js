import React from 'react';

const Photo = (props) => {
  return(
    <div className="photo-container">
      <div className="image">
        <img src={props.img} alt="Photo of the day" />
      </div> 
      <h3>{props.title}</h3>
    </div>
  )
}


export default Photo;