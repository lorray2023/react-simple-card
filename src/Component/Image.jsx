import React from 'react'

const Image = (props) => {
  return (
    <div>
                
      <img src={props.picture} alt="" style={{height: 200 , width: 200}}  />
    </div>
  );
}

export default Image