import React from 'react'
import Counter from './Counter'
import GreenCounter from './GreenCounter'
import RedCounter from './RedCounter'

const SampleComponent = () => {
  return (
    <div ><h1 >I Have lots of Counter And all counter have backGround color Change</h1>
    <RedCounter com={<Counter/>}/>
    <GreenCounter com={<Counter/>}/>
    </div>
  )
}

export default SampleComponent