import React from 'react';
const ResourceComponentText = ({text}) => {
  return ( 
    <>
        {text.includes("^") ? <p style={{display: "block"}}>{text}</p> : <p style={{display: "inline"}}>{text}</p> }
    </>
  )
}

export default ResourceComponentText;