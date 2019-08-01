import React from 'react';

const Description = (props) => {
  return(
    <div className="description">
      <h4>Published on {props.date}</h4>
      <p>{props.info}</p>
    </div>
  )
}


export default Description