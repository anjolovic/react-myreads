import React from "react"
import { Link } from "react-router-dom"
import Books from "./Books"
import Header from "./Header"
import { booksCollection } from "../utils/helpers"



const BookShelf = (props) => {
	const shelves = booksCollection(props.books)
	return (
		<div className="list-books">
			<Header />
			<div className="list-books-content">
				{shelves.map((shelf) => {
					return <Books
						key={shelf.id}
						shelf={shelf}
						appInterface={props.appInterface} />
				})}
			</div>
			<div className="open-search">
				<Link to="/search">Add a book</Link>
			</div>
		</div>
	)
}

export default BookShelf
