import React from 'react'

const AddressView = ({infoList})=> {
   
    const list = infoList.map((info)=>{
        return (
            <div>
                <p>이름 : {info.name}</p>
                <p>전화번호 : {info.tel}</p>
                <p>주소 : {info.addr}</p>
                <p>나이 : {info.age}</p>
            </div>
        )
    })
    return (
        <div>
            {list}
        </div>
    )
}

export default AddressView
