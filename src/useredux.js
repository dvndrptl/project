import React from 'react'
import { useSelector } from 'react-redux'
import { countRed } from './reducer'

export default function Useredux() {
    const dataRed = useSelector(state=>state)
  return (
    <div>
        {console.log(dataRed)}
        Count: {dataRed.count} <br/>
        {/* Cart: {dataRed.cart} */}
    

    </div>
  )
}
