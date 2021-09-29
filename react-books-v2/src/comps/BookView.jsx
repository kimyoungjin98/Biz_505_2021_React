import React, { useContext } from 'react'
import BookContext from '../context/BookContext'
import BookList from './BookList'

function BookView() {
    // context로 부터 필요한 state 분해하기
    const { book } = useContext(BookContext)
    return (
        <div>
            <span>입력된 도서명 : {book.b_name}</span>
            <span>입력된 장르 : {book.b_genre}</span>
            <BookList/>
        </div>
    )
}

export default BookView
