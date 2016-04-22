var React = require('react');
var Firebase = require('firebase');
var rootUrl = 'https://shining-heat-7015.firebaseio.com/';

module.exports = React.createClass({
	getInitialState:function(){
		return {
			text:this.props.item.text,
			done:this.props.item.done
		};
	},
	componentWillMount:function(){
		this.itemRef = new Firebase(rootUrl + 'items/' + this.props.item.key);
		// console.log('itemRef', this.props.item.key);
	},
	render: function(){
		return  <div className="input-group">
      <span className="input-group-addon">
        <input onChange={this.onDoneChange}  type="checkbox" />
      </span>
      <input onChange={this.onTextChange} value={this.state.text} type="text" className="form-control" />
      <span className="input-group-btn">
        <button className="btn btn-danger" type="button">Delete</button>
      </span>
    </div>
	},
	onTextChange:function(event){
		this.setState({
			text:event.target.value
		});
	},
	onDoneChange:function(event){
		var update = {done:event.target.checked};
		this.setState(update);
		this.itemRef.update(update);
	}
})