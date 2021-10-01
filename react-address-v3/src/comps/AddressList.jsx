import React from "react";
import { useAddrContext } from "../context/AppContextProvider";

function AddressList() {
  const { addrBook, onDelete } = useAddrContext();

  const viewList = addrBook.map((addr, index) => {
    return (
      <tr key={addr.a_id} data-id={addr.a_id} onClick={onDelete}>
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
