import React from "react"
import Book from "./Book"


const Books = (props) => {
	const books = props.shelf.books
	const mood = props.shelf.mood
	return (
		<div>
			<div className="bookshelf">
				<h2 className="bookshelf-title">{mood}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{books.map((book) => (
							<li key={book.id}>
								<Book key={book.id} book={book} appInterface={props.appInterface}
								/>
							</li>
						))}
					</ol>
				</div>
			</div>
		</div>
	)
}

export default Books
