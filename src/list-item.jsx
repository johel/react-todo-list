var React = require('react');
var Firebase = require('firebase');
var rootUrl = 'https://shining-heat-7015.firebaseio.com/';

module.exports = React.createClass({
	getInitialState:function(){
		return {
			text:this.props.item.text,
			done:this.props.item.done,
			textChanged:false
		};
	},
	componentWillMount:function(){
		this.itemRef = new Firebase(rootUrl + 'items/' + this.props.item.key);
	},
	render: function(){
		return  <div className="input-group itemDiv">
      <span className="input-group-addon">
        <input onChange={this.onDoneChange}  type="checkbox" />
      </span>
      <input 
      		onChange={this.onTextChange} 
      		value={this.state.text} type="text" 
      		className="form-control"
      		disabled={this.state.done} />
      <span className="input-group-btn">
      	{this.renderChangeButtons()}
        <button onClick={this.handleDeleteClick} className="btn btn-danger" type="button">Delete</button>
      </span>
    </div>
	},
	onTextChange:function(event){
		this.setState({
			text:event.target.value,
			textChanged:true
		});
	},
	onDoneChange:function(event){
		var update = {done:event.target.checked};
		this.setState(update);
		this.itemRef.update(update);
	},
	handleDeleteClick:function(){
		this.itemRef.remove();
	},
	renderChangeButtons:function(){
		if(this.state.textChanged){
			return [
				<button key="btnEdit" onClick={this.handleEditClick} className="btn btn-default" type="button">Edit</button>,
				<button key="btnUndo" onClick={this.handleUndoClick} className="btn btn-default" type="button">Undo</button>
			]
		}
	},
	handleEditClick:function(){
		var update = {text:this.state.text};
		this.setState({
			textChanged:false
		});
		this.itemRef.update(update);
	},
	handleUndoClick:function(){
		var textBeforeChange = this.props.item.text;
		this.setState({
			textChanged:false,
			text:textBeforeChange
		});
	}
})