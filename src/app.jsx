var React = require('react');
var ReactDOM = require('react-dom');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var rootUrl = 'https://shining-heat-7015.firebaseio.com/';
var Header = require('./header');
var List = require('./list');

var Hello = React.createClass({
	mixins:[ReactFire],
	getInitialState:function(){
		return{
			items:{},
			loaded:false
		};
	},
	componentWillMount:function(){
		this.itemsRef = new Firebase(rootUrl + "items");
		//Creates a one-way binding from node in your Firebase database to an object in this.state.items of your React component.
		this.bindAsObject(this.itemsRef, "items");
		this.itemsRef.on('value', this.dataWasLoaded);
	},
  render: function() {
    return <div className=" row panel panel-default">
    	<div className="col-md-8 col-md-offset-2">
	    	<h2 className="text-center">Todo List 1</h2>
	    	<Header itemsStore={this.firebaseRefs["items"]} />
	    	<hr/>
	    	<div className={'content ' + (this.state.loaded? 'loaded' : '') }>
	    		<List items={this.state.items} />
	    		{this.renderDeleteButton()}
	    	</div>	    	
    	</div>
    </div>
  },
  renderDeleteButton:function(){
  	if(this.state.loaded){
  		return <div className="text-center clear-complete">
  			<hr/>
  			<button
  					type="button"
  					onClick={this.onDeleteDoneClick}
  					className="btn bet-default">
  					Clear Completed
  			</button>
  		</div>
  	}
  },
  onDeleteDoneClick:function(){
  	for(var key in this.state.items){
  		if(this.state.items[key].done){
  			this.itemsRef.child(key).remove();
  		}
  	}
  },
  dataWasLoaded:function(){
  	this.setState({
  		loaded:true
  	});
  }
});

var element = React.createElement(Hello, {});
ReactDOM.render(element, document.querySelector('.container'));
