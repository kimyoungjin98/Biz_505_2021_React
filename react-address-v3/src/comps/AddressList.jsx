import React from "react";

// 비구조화
// const {addrBook} = props대신 직접 분해하면서 받기
function AddressList({ addrBook }) {
  const viewList = addrBook.map((addr, index) => {
    return (
      <tr key={addr.a_id}>
        <td>{index + 1}</td>
        <td>{addr.a_name}</td>
        <td>{addr.a_addr}</td>
        <td>{addr.a_tel}</td>
        <td>{addr.a_age}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>No.</th>
          <th>Name</th>
          <th>Addr</th>
          <th>Tel</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>{viewList}</tbody>
    </table>
  );
}

export default AddressList;
