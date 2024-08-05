import React from 'react'
import { shoes } from '../util/Products'
import MenReusable from './MenReusable'

const Junior = () => {
    const kidShoes = shoes.filter((item) => item.category === "Men");
  return (
    <div>
      <MenReusable data={kidShoes}/>
    </div>
  )
}

export default Junior
