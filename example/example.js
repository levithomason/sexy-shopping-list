let state = {
  items: [
    { name: 'hi' }
  ],
}

const render = () => {
  const app = document.querySelector('#app')
  // blow away old app
  app.textContent = null

  // convert the items from the API into <li>{name}</li>
  const items = state.items.map((item) => {
    const itemEl = document.createElement('li')
    itemEl.textContent = item.name
    return itemEl
  })

  // create a <ul> and append each <li>{name}</li>
  const itemList = document.createElement('ul')
  items.forEach((itemEl) => {
    itemList.appendChild(itemEl)
  })

  // render the entire <ul> into #app!
  app.appendChild(itemList)
}

// render the initial state
render()

const setState = (newState) => {
  Object.assign(state, newState)
  console.log(state)
  render()
}

function getItems() {
  axios.get('https://ssla-lt.herokuapp.com/items')
    .then((res) => {
      setState({
        items: res.data,
      })
    })
}
