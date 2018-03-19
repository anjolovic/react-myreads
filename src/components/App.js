import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from '.././BooksAPI'
import BookShelf from "./BookShelf"
import Search from "./Search"
import '../css/App.css'

class App extends Component {
  state = {
    books: []
  }


  // Lifecycle Methods
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }


  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => {
          return (
            <BookShelf
              books={this.state.books} />
          )
        }} />
        <Route path="/search" render={() => {
          return (
            <div className="search-books">
              <Search />
            </div>
          )
        }} />
      </div>
    )
  }
}

export default App