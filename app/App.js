import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/Header/Header'
import ShoppingList from './components/ShoppingList/ShoppingList'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ShoppingList />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
