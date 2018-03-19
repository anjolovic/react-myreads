import React from "react"
import { shelfNames } from "../utils/helpers"

const Book = (props) => {
  const book = props.book
  return (
    <section className="book">
      <div className="book-top">
        {book.imageLinks && <div className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${
              book.imageLinks.thumbnail})`
          }}></div>}
        <div className="book-shelf-changer">
          <select value={book.shelf} onChange={(e) => {
            let shelf = e.currentTarget.value;
            props.appInterface.update(book, shelf);
          }}>
            {
              shelfNames.map((shelf) => {
                return (<option key={shelf.id} value={shelf.id}>{shelf.text}</option>);
              })
            }
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      {book.authors && <div className="book-authors">{book.authors.join(', ')}</div>}
    </section>
  )
}

export default Book
