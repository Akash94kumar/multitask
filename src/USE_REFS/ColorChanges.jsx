import React, { useRef,useEffect } from 'react'

const ColorChanges = () => {
    const newRef=useRef()
    const blurRef=useRef()
    
    useEffect(() => {
     console.log(newRef)
     console.log(newRef.current.innerHTML)
     
    }, [])
    
   function colorchange(){
    newRef.current.style.color='red'
    newRef.current.innerHTML="Akash Mandal"
    blurRef.current.disabled=true
   }
  return (
    <div>
        <h1 ref={newRef}>Hello Akash</h1>
        <button ref={blurRef}onClick={colorchange}>Change</button>
    </div>
  )
}

export default ColorChanges