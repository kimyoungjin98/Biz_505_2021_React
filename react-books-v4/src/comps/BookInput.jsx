import React, { useContext, useRef } from "react";
import BookContext from "../context/BookContext";
import Mybutton from "../My/Mybutton";
import UUID from "react-uuid";

function BookInput() {
  const { book, setBook, bookList, setBookList } = useContext(BookContext);

  const nextId = useRef(0);
  const nameId = useRef();
  const genreId = useRef();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value, b_id: nextId.current });
  };

  const bookInsert = async () => {
    // await setBook({ ...book, b_id: UUID() });

    if (book.b_name === "") {
      alert("도서명을 입력하세요");
      nameId.current.focus();
      return;
    }

    if (book.b_genre === "") {
      alert("장르를 입력하세요");
      genreId.current.focus();
      return;
    }

    await setBookList([...bookList, book]);

    nextId.current++;

    await setBook({ b_id: "", b_name: "", b_genre: "" });
  };

  return (
    <div className="book_input">
      <div>
        <label>Title</label>
        <input
          name="b_name"
          ref={nameId}
          value={book.b_name}
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <label>Genre</label>
        <input
          name="b_genre"
          ref={genreId}
          value={book.b_genre}
          onChange={onChangeHandler}
        />
      </div>
      <div className="btn_input">
        <Mybutton onClick={bookInsert}>Add List</Mybutton>
      </div>
    </div>
  );
}

export default BookInput;
