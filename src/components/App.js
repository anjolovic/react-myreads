import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from '.././BooksAPI'
import escapeStringRegexp from 'escape-string-regexp';
import BookShelf from "./BookShelf"
import Search from "./Search"
import SearchResults from "./SearchResults"
import '../css/App.css'

class App extends Component {
  state = {
    query: '',
    books: [],
    searchResults: []
  }

    // Application Methods

    onQueryChange(query) {
      this.setState({ query });
    }
  
    getQuery() {
      return this.state.query;
    };
  
    update(book, shelf) {
      // check if the current shelf != new shelf
      if (book.shelf !== shelf) {
        book.shelf = shelf;
        BooksAPI.update(book, shelf)
          .then(() => {
            this.setState(state => ({
              books: state.books.filter(b => b.id !== book.id).concat([book])
            }));
          });
      }
    }
  
    fixSearchResults(searchResults) {
      let books = this.state.books;
  
      searchResults.forEach((search) => {
        let book = books.find(book => book.id === search.id);
        if (book) {
          search.shelf = book.shelf;
        } else {
          search.shelf = 'none';
        }
      });
      return searchResults;
    }

    interface = {
      search: {
        onQueryChange: this.onQueryChange.bind(this),
        getQuery: this.getQuery.bind(this)
      },
      update: this.update.bind(this)
    }


 // Lifecycle Methods 
 componentDidMount() {
  BooksAPI.getAll().then((books) => {
    this.setState({ books })
  })
}

componentDidUpdate(props, state) {
  if (this.state.query && this.state.query !== state.query) {
    BooksAPI.search(escapeStringRegexp(this.state.query), 50)
      .then((books) => {
        if (books instanceof Array) {
          this.setState({ searchResults: this.fixSearchResults(books) });
        } else {
          this.setState({
            searchResults: []
          })
        }
      });
  }
}


  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => {
          return (
            <BookShelf
              books={this.state.books}
              appInterface={this.interface} />
          )
        }} />
        <Route path="/search" render={() => {
          return (
            <div className="search-books">
              <Search appInterface={this.interface} />
              <SearchResults
                className="search-books-results"
                books={this.state.searchResults}
                appInterface={this.interface} />
            </div>
          )
        }} />
      </div>
    )
  }
}

export default App