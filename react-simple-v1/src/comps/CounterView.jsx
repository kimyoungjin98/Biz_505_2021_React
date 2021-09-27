import React, {useState} from 'react'
import CounterButton from './CounterButton';

const CounterView = ({ count })=> {
    
    return (
        <div>
            <div>
                카운트 : {count}
            </div>
        </div>
    )
}

export default CounterView
