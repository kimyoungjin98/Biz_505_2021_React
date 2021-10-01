import { useAddrContext } from "../context/AppContextProvider";

function AddressInput() {
  const { onChangeHandler, addrBookInsert, address } = useAddrContext();

  return (
    <div className="adr_input">
      <input
        value={address.a_name}
        name="a_name"
        placeholder="이름"
        onChange={onChangeHandler}
      />
      <input
        value={address.a_addr}
        name="a_addr"
        placeholder="주소"
        onChange={onChangeHandler}
      />
      <input
        value={address.a_tel}
        name="a_tel"
        placeholder="전화번호"
        onChange={onChangeHandler}
      />
      <input
        value={address.a_age}
        name="a_age"
        placeholder="나이"
        onChange={onChangeHandler}
      />
      <button onClick={addrBookInsert}>추가</button>
    </div>
  );
}

export default AddressInput;
