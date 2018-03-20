import React, {Component} from "react"
import { Link } from "react-router-dom"

const Search = (props) => {
  return (
    <div className="search-books-bar">
      <Link to="/" className="close-search">Close</Link>
      <div className="search-books-input-wrapper">
      <input type="text"
          placeholder="Search by title or author"
          onChange={(e) => props.appInterface.search.onQueryChange(e.target.value.trim())}
          value={props.appInterface.search.getQuery()} />
      </div>
    </div>
  )
}

export default Search
