import React, { useContext } from "react";
import BookContext from "../context/BookContext";
import Mybutton from "../My/Mybutton";

function BookInput() {
  const { book, setBook } = useContext(BookContext);
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
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
        <Mybutton
          onClick={() => {
            alert("반가워");
          }}
        >
          리스트 추가
        </Mybutton>
      </div>
    </div>
  );
}

export default BookInput;
