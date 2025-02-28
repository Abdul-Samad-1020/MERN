import React from 'react'

const Condition = (ifLogin) => {
    ifLogin = true

    // if(ifLogin){
    //   return <h3>Welcome</h3>
    // }else {
    //   return <h3>Please Login</h3>
    // }
    return ifLogin? <h1 style={{color:'red'}}>Welcome</h1> : <h2 style={{color:'green'}}>Please Login</h2>
}

export default Condition
