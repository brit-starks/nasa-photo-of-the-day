import React from 'react';

const Photo = (props) => {
  return(
    <div className="photo-container">
      <h3>{props.title}</h3>
      <div className="image">
        <img src={props.image} alt="Photo of the day" />
      </div> 
    </div>
  )
}


export default Photo;