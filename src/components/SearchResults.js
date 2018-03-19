import React from 'react'
import Book from './Book'

const SearchResults = (props) => {
  return (
    <ol className="books-grid">
      {props.books.map((book) => {
        return (<Book key={book.id} book={book} appInterface={props.appInterface} />);
      })}
    </ol>
  )
}

export default SearchResults