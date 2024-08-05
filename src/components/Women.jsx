import React from 'react'
import { shoes } from '../util/Products'
import MenReusable from './MenReusable'

const Women = () => {
    const womenShoes = shoes.filter((item) => item.category === "women");
  return (
    <div>
      <MenReusable data={womenShoes}/>
    </div>
  )
}

export default Women
