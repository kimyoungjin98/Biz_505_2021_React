import React from 'react'

const CounterView = ({num})=>{
    
    return (
        <div>
            <div> {num}와(과) 20의 합 : {num + 20} </div>            
            <div> {num}와(과) {num}의 곱 : {num * num}</div>
        </div>
    )
}

export default CounterView
