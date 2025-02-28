import React, { useState } from 'react'
import { useEffect } from 'react';

const Timer = () => {
    const [Counter,setcounter] = useState(0);
    useEffect(()=>{
        const interval = setInterval(() => {
            setcounter(prevCounter => prevCounter + 1);
        }, 1000);
        return () => clearInterval(interval);
    })


    return (
    <div>
      <div style={{border:'3px', background:'black', color:'white', height:'50vh' , width:'50vw', borderRadius:'50px', padding:'20px'}}>
      <h4>This is timer componentss</h4>
      <h1>{Counter}</h1>
    </div>
    </div>
  )
}

export default Timer
