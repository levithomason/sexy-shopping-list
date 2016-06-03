import React from 'react'

class ShoppingList extends React.Component {
  state = {
    items: ['beef', 'cows']
  }

  render() {
    const items = this.state.items.map((item) => (
      <li>{item}</li>
    ))

    return (
      <ul>{items}</ul>
    )
  }
}

export default ShoppingList