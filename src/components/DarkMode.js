import React, {useState} from 'react'

import React from 'react'

export default function DarkMode() {
  
    const [style, setStyle] = useState({
        color: 'black',
        background: 'white'
      });
    
    const [btnText, setBtnText] = useState("Dark Mode")
    
      const handleModeChange =() =>{
        if(style.color == 'black'){
          setStyle({
            color: 'white',
            background: 'black'
          })
          
          setBtnText("Light Mode")
        }
        else{
          setStyle({
            color: 'black',
            background: 'white'
          })
    
          setBtnText("Dark Mode")
        }
      }
  
    return (
    <div className="container mx-2">
      <button className="btn btn-secondary " onClick={handleModeChange}>{btnText}</button>
    </div>
  )
}
