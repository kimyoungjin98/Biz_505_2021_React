import React, { useContext } from "react";
import BookContext from "../context/BookContext";

function BookList() {
  const { bookList } = useContext(BookContext);

  // 객체배열을 선언하여 List의 제목 배열 만들기
  const list_title_names = [
    { id: 0, t_name: "ID" },
    { id: 1, t_name: "도서명" },
    { id: 2, t_name: "장르" },
    { id: 3, t_name: "출판사" },
    { id: 4, t_name: "저자" },
    { id: 5, t_name: "가격" },
  ];

  const viewList = bookList.map((book, index) => {
    return (
      <tr key={book.b_id}>
        <td>{book.b_id}</td>
        <td colSpan="4">{book.b_name}</td>
        <td>{book.b_genere}</td>
      </tr>
    );
  });

  // 제목 배열을 사용하여 table의 list 생성하기
  const list_title_view = list_title_names.map((title) => {
    return <th key={title.id}>{title.t_name}</th>;
  });

  return (
    <table className="book_list">
      <thead>
        <tr>{list_title_view}</tr>
      </thead>
      <tbody>{viewList}</tbody>
    </table>
  );
}

export default BookList;