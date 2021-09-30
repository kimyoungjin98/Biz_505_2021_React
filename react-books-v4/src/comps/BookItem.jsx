import React from "react";
import { useBookContext } from "../context/AppContextProvider";

function BookItem() {
  const { bookList } = useBookContext();
  return bookList.map((book, index) => {
    return (
      <tr key={book.b_id}>
        <td>{book.b_id}</td>
        <td colSpan="4">{book.b_name}</td>
        <td>{book.b_genre}</td>
      </tr>
    );
  });
}

export default BookItem;
