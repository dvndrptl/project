import React from 'react'
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { firstType, sndType, thrdType } from './actionType';

export default function Redux() {
    const usedispatch = useDispatch()
  return (
    <div>
        <Button variant="outlined" onClick={()=>{
            usedispatch({type:firstType})

        }} >Incr</Button>

        <Button variant="outlined"onClick={()=>{
            usedispatch({type: sndType})
        }} >Decr</Button>
        <br />
        <br />
        <br />


        <Button variant="outlined" onClick={()=>{
            usedispatch({type:thrdType,
            payload: {
                name: "student",
                id : "other"
            }})
        }}>Card</Button>

        
    </div>
  )
}
