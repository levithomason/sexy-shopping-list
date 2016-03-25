import React, { Component } from 'react'
import ProductRow from './ProductRow'
import ProductCategoryRow from './ProductCategoryRow'

export default class ProductTable extends Component {
  render() {
    return (
      <div>
        <h4>Name Price</h4>

        <ProductCategoryRow name='Sporting Goods' />

        <ProductRow>Football</ProductRow>
        <ProductRow>Baseball</ProductRow>
        <ProductRow>Basketball</ProductRow>

        <ProductCategoryRow name='Electronics' />

        <ProductRow>iPod Touch</ProductRow>
        <ProductRow>iPhone 5</ProductRow>
        <ProductRow>Nexus 7</ProductRow>
      </div>
    )
  }
}
