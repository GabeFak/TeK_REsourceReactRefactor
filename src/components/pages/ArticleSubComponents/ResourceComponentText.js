import React from 'react';
// import { useEffect } from 'react';
// let textToSplit = [];
const ResourceComponentText = ({text}) => {

    // useEffect(() => {
    //     if(text.includes("^")) {
    //         const splitParReg = /\^/
    //         textToSplit[0] = 'block';
    //         textToSplit[1] = text.split(splitParReg);
    //     }else{
    //         textToSplit[0] = 'inline';
    //         textToSplit[1] = text;
    //     }
    //     console.log(textToSplit);
    // }, [textToSplit])

  return ( 
    <>
        {text.includes("^") ? <p style={{display: "block"}}>{text}</p> : <p style={{display: "inline"}}>{text}</p> }
        {/* {textToSplit[0] === 'block' ? 
            <> 
                {textToSplit[1].length > 1 ? 
                    <>
                        <p style={{display: "inline"}}>{textToSplit[1][0]}</p> <p style={{display: "block"}}>{textToSplit[1][1]}</p></> 
                : 
                        <p style={{display: "block"}}>{textToSplit[1][0]}</p>} 
            </> 
        : 
            <p style={{display: "inline"}}>{text}</p>} */}
    </>
  )
}

export default ResourceComponentText;