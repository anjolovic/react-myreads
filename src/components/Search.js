import React, {Component} from "react"
import { Link } from "react-router-dom"

class Search extends Component {
  render() {
    return (
      <div className="search-books-bar">
        <Link to="/" className="close-search">Close</Link>
        <div className="search-books-input-wrapper">
        <input type="text"
            placeholder="Search by title or author"
            onChange={(e) => this.props.appInterface.search.onQueryChange(e.target.value.trim())}
            value={this.props.appInterface.search.getQuery()} />
        </div>
      </div>
    )
  }
}

export default Search
