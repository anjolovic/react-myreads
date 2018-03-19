const CURRENTLY_READING = "currentlyReading"
const WANT_TO_READ = "wantToRead"
const READ = "read"
const NONE = "none"

export const BOOKSHELVES = {
	[CURRENTLY_READING]: "Currently Reading",
	[WANT_TO_READ]: "Want to Read",
	[READ]: "Read",
	[NONE]: "None",
}

export const shelfNames = Object.keys(BOOKSHELVES).map((key) => {
	return {
		id: key,
		text: [key]
	}
})


export const booksCollection = (books) => {
	let shelves = {}
	
	Object
		.keys(BOOKSHELVES)
		.forEach((key) => {
			if (key === NONE) {
				return
			}
			shelves[key] = {
				id: key,
				mood: BOOKSHELVES[key],
				books: []
			}
		})

	books.forEach((book) => {
		if (shelves[book.shelf]) {
			shelves[book.shelf].books.push(book)
		}
	})

	return Object.keys(shelves).map((key) => shelves[key])
}