import React from 'react';

const Description = (props) => {
  return(
    <div className="description">
      <h4>Published on {props.date}</h4>
      <p style={{lineHeight:'2.5rem', maxWidth:'50%', margin: '4rem 0  6rem 17rem'}}>{props.info}</p>
    </div>
  )
}


export default Description