const h1 = React.createElement("h1", {id: "heading"}, "Hello React")
const h2 = React.createElement("h2", {id: "heading2"}, "Hello React v2")
const parent = React.createElement("div", {id: 'parent'}, [
  React.createElement("div", {id: 'child'}, [
    h1,
     h2
  ])
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(parent);