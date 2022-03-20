import Button from '@mui/material/Button';
import React from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';

export default function Tableprint() {
    const seleData = useSelector(state => state)
    const [data, setdata] = useState([])

useEffect(()=>{
    setdata([...seleData.fortab])
})

    return (
<div>

<div>
<p>hello</p>

                <Button variant="outlined" onClick={() => {
                    console.log("data is", seleData.fortab)
                    {}

                }} >print</Button>

                <table border="1px" width="30%">
                    <thead>
                        <tr>
                            <th>
                                type:
                            </th>
                            <th>
                                Amount:
                            </th>
                        </tr>

                    </thead>
                    <tbody>
                        {data.map(function (ele) {
                            return (
                                <tr key={uuidv4()}>
                                    <td>{ele.datatype}</td>
                                    <td>{ele.amount}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>



            </div>
</div>

        

    )
}
