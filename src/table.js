import React from 'react'
import { useState } from 'react'
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { tabledata } from './actionType';

export default function Table() {
    const [datatype, settype] = useState("Credit")
    const [amount, setamount] = useState("")
    const dispatch = useDispatch()
    return (
        <div>
            <label htmlFor="" >Type:</label>

            <select name="" id="" onChange={(e)=>{settype(e.target.value)}}>

                <option value="Credit"  >Credit</option>
                <option value="Debit" >Debit</option>
            </select>
            <br />

            <label htmlFor="">Amount:</label>
            <input type="text" placeholder='Amount' onChange={(e) => { setamount(e.target.value) }} />

            <br />
            <Button variant="outlined" onClick={(e) => {
                dispatch({
                    type: tabledata,
                    payload: {
                        datatype: datatype,
                        amount: amount
                    }
                })


            }} >Save</Button>




        </div>
    )
}
