import React, { useContext, useRef } from "react";
import BookContext from "../context/BookContext";
import Mybutton from "../My/Mybutton";
import UUID from "react-uuid";

function BookInput() {
  const { book, setBook, bookList, setBookList } = useContext(BookContext);

  let nextId = useRef(0);
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value, b_id: nextId.current });
  };

  const bookInsert = async () => {
    // await setBook({ ...book, b_id: UUID() });
    await setBookList([...bookList, book]);

    nextId.current++;

    await setBook({ b_id: "", b_name: "", b_genre: "" });
  };

  return (
    <div className="book_input">
      <div>
        <label>Title</label>
        <input name="b_name" value={book.b_name} onChange={onChangeHandler} />
      </div>
      <div>
        <label>Genre</label>
        <input name="b_genre" value={book.b_genre} onChange={onChangeHandler} />
      </div>
      <div className="btn_input">
        <Mybutton onClick={bookInsert}>Add List</Mybutton>
      </div>
    </div>
  );
}

export default BookInput;
