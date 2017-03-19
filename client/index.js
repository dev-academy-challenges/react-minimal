var React = require('react')
var ReactDOM = require('react-dom')

function helloTemplate (props) {
  return (
    <div>hello {props.name}</div>
  )
}

var data = { name: 'mix' }
var view = helloTemplate(data)

var placeToMount = document.getElementById('root')

ReactDOM.render(view, placeToMount)

