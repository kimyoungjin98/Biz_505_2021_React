import React, { useContext } from 'react'
import BookView from './BookView'
import BookContext from '../context/BookContext'

function BookInput() {
    const {book, setBook, bookList, setBookList} = useContext(BookContext);
    const onChangeHandler = (e)=>{
        const {name, value} = e.target;
        setBook({...book, [name]:value});
    }
    const bookInsert = ()=>{
        setBook({...book, b_id : Math.random()})
        setBookList([...bookList, book])
    }
    return (
        <div>
            <input placeholder="도서명 입력" value={book.b_name} name="b_name" onChange={onChangeHandler}/>
            <input placeholder="장르 입력" value={book.b_genre} name="b_genre" onChange={onChangeHandler}/>
            <button onClick={bookInsert}>리스트 추가</button>
            <BookView/>
        </div>
    )
}

export default BookInput
