import React, { Component } from 'react'

export default class ProductCategoryRow extends Component {
  render() {
    return (
      <h5>{this.props.name}</h5>
    )
  }
}
