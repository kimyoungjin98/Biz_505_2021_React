import React from 'react'
import uuid from 'react-uuid';

const AddressInput = ({info, setInfo, setInfoList, infoList})=> {
    const setData = (e)=>{
        const {name, value} = e.target;
        setInfo({
            ...info,
            [name] : value
        })
    }
    const addInfo = ()=>{
        const _info = {
            id : uuid(),
            name : info.name,
            tel : info.tel,
            age : info.age,
            addr : info.addr,
        }
        setInfoList([...infoList, _info])
        setInfo({
            name : "",
            tel : "",
            age : 0,
            addr : "",
        })
    }
    return (
        <div>
            <input placeholder="이름" name="name" onChange={setData} value={info.name}/>
            <input placeholder="주소" name="addr" onChange={setData} value={info.addr}/>
            <input placeholder="전화번호" name="tel" onChange={setData} value={info.tel}/>
            <input placeholder="나이" name="age" onChange={setData} value={info.age}/>
            <div>
                <button onClick={addInfo}>추가</button>
            </div>
        </div>
    )
}

export default AddressInput
