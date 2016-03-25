import React from 'react'
import ReactDOM from 'react-dom'
import FilterableProductTable from './components/FilterableProductTable'

class App extends React.Component {
  render() {
    return (
      <div>
        <FilterableProductTable />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))
