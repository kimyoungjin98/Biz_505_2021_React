import React, { useState } from "react";
import { Route } from "react-router-dom";
import BookInput from "./BookInput";
import BookView from "./BookView";
import BookContext from "../context/BookContext";
import BookList from "./BookList";

/**
 * 컴포넌트의 선택적 Rendering
 * 어떤 조건에 따라컴포넌트를 보이거나 보이지 않도록 하는 방법
 * NavLink를 클릭했을때 선택적으로 화면을 보여주기
 */
function BookMain() {
  const [book, setBook] = useState({
    b_name: "자바야 놀자",
    b_genre: "IT 개발서",
  });
  const [bookList, setBookList] = useState([]);

  const providerData = { book, setBook, setBookList, bookList };
  const onClick = (e) => {};

  return (
    <>
      <BookContext.Provider value={providerData}>
        <Route path="/" exact>
          여기는 홈 화면
        </Route>
        <Route path="/insert" exact>
          <BookInput />
          <BookView />
        </Route>
        <Route path="/list" exact>
          <BookList />
        </Route>
      </BookContext.Provider>
    </>
  );
}

export default BookMain;
