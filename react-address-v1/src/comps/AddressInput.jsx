import React from 'react'

const AddressInput = ({info, setInfo, setInfoList, infoList})=> {
    const setData = (e)=>{
        const {name, value} = e.target;
        /**
         * 계산식 속성 이름, computed property name
         * 변수이름을 변수값으로 생성하기 
         * if(e.target.name === "name")
         *      setAddress({...adress, "name" : value})
         * else if(e.target.name == "addr")
         *      setAddress({...adress, "addr" : value})
         * 
         * CPN : 표현식을 사용하여 객체의 key 값을 정의하는 문법
         */ 
        setInfo({
            ...info,
            [name] : value
        })
    }
    const addInfo = ()=>{
        setInfoList({...infoList, info})
        console.log(infoList)
    }
    return (
        <div>
            <input placeholder="이름" name="name" onChange={setData}/>
            <input placeholder="주소" name="addr" onChange={setData}/>
            <input placeholder="전화번호" name="tel" onChange={setData}/>
            <input placeholder="나이" name="age" onChange={setData}/>
            <div>
                <button onClick={addInfo}>추가</button>
            </div>
        </div>
    )
}

export default AddressInput
