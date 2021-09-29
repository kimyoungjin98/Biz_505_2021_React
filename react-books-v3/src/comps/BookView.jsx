import React, { useContext } from "react";
import BookContext from "../context/BookContext";

function BookView() {
  const viewStyle = {
    width: "80vw",
    margin: "20px auto",
    display: "flex",
    border: "1px solid #ddd",
    padding: "1rem",
  };

  const { book } = useContext(BookContext);

  return (
    <div className="book_view">
      <div>
        <label>Title : {book.b_name}</label>
      </div>
      <div>
        <label>Genre : {book.b_genre}</label>
      </div>
    </div>
  );
}

export default BookView;
