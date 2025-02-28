import React, { useState } from 'react'

const Timer = () => {
    const [Counter,setcounter] = useState(0);
    return (
    <div>
      <h4>This is timer componentss</h4>
      <h1>{Counter}</h1>
    </div>
  )
}

export default Timer
