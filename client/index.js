const React = require('react')
const ReactDOM = require('react-dom')

function helloTemplate (props) {
  return (
    <div>hello {props.name}</div>
  )
}

const data = {name: 'humans'}
const view = helloTemplate(data)

const placeToMount = document.getElementById('root')

ReactDOM.render(view, placeToMount)
