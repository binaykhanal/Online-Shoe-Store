import React from 'react'
import { shoes } from '../util/Products'
import MenReusable from './MenReusable'

const Men = () => {
    const menShoes = shoes.filter((item) => item.category === "Men");
  return (
    <div>
      <MenReusable data={menShoes}/>
    </div>
  )
}

export default Men
