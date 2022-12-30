import React from 'react'

const GreenCounter = (props) => {
  return (
    <div><div
    style={{
      background: "Green",
      height: "120px",
      width: "120px",
      textAlign: "center",
    }}
  >
    {props.com}
  </div></div>
  )
}

export default GreenCounter