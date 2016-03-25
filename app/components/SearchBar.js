import React, { Component } from 'react'

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Search..." />
        <br />
        <label>
          <input type="checkbox" />
          Only show products in stock
        </label>
      </div>
    )
  }
}
