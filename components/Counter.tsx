'use client'
import React, { useState } from 'react'

const Counter :React.FC =()=>{

    const[count, setCount] = useState(0)

    function handleCount(){
        // console.log("ji")
        setCount(count+1)
    }

    return (
        <div>
            {count}
           <button onClick={handleCount} >Increase</button>
        </div>
    )
}

export default Counter