import React from 'react'

const CounterInput = ({change})=>{
    
    return (
        <div>
            <input onChange={change} type="number"/>
        </div>
    )
}

export default CounterInput
