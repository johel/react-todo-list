var React = require('react');
var ReactDOM = require('react-dom');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var rootUrl = 'https://shining-heat-7015.firebaseio.com/';
var Header = require('./header');

var Hello = React.createClass({
	mixins:[ReactFire],
	componentWillMount:function(){
		var ref = new Firebase(rootUrl + "items");
		//Creates a one-way binding from node in your Firebase database to an object in this.state.items of your React component.
		this.bindAsObject(ref, "items");
	},
  render: function() {
  	console.log('state', this.state);
    return <div className=" row panel panel-default">
    	<div className="col-md-8 col-md-offset-2 ">
	    	<h2 className="text-center">Todo List</h2>
	    	<Header />
    	</div>
    </div>
  }
});

var element = React.createElement(Hello, {});
ReactDOM.render(element, document.querySelector('.container'));
