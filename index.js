var React = require('react')
var ReactDOM = require('react-dom')


function template (props) {
  return (
    <div>hello {props.name}</div>
  ) 
}

var data = { name: 'mix' }
var view = page(data)

var placeToMount = document.getElementById('root')

ReactDOM.render(view, placeToMount)

