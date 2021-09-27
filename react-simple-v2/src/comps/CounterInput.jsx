import React from 'react'

const CounterInput = ({change})=>{
    const onchange = (e)=>{
        const _value = e.target.value;
        const value = _value ? parseInt(_value) : 0
        {change(value)}
    }
    return (
        <div>
            <input onChange={onchange} type="number"/>
        </div>
    )
}

export default CounterInput
