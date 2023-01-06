import React, { useRef,useEffect } from 'react'

const ColorChanges = () => {
    const newRef=useRef()
    
    useEffect(() => {
     console.log(newRef)
     console.log(newRef.current.innerHTML)
    }, [])
    
   function colorchange(){
    newRef.current.style.color='red'
   }
  return (
    <div>
        <h1 ref={newRef}>Hello Akash</h1>
        <button onClick={colorchange}>Change</button>
    </div>
  )
}

export default ColorChanges