import React from 'react'

function Title(props) {
  const styles = {
    border: '5px solid blue',
    padding: '25px',
    
    
  };
  
  return (
    <div><h1 style= {styles}>{props.heading}</h1>
    

     
    </div>
  );
}

export default Title