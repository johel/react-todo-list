var React = require('react');

module.exports = React.createClass({
	getInitialState:function(){
		return {
			text:''
		};
	},
	render:function(){
		return <div className="input-group">
			<input 
				onChange={this.handleChange}
				type="text" className="form-control" value={this.state.text}/>
			<div className="input-group-btn">
				<button
					onClick={this.handleClick} 
					type="button" 
					className="btn btn-default">Add Task</button>
			</div>
		</div>
	},
	handleClick:function(){
		console.log('button was clicked');
		this.props.itemsStore.push({
			text:this.state.text,
			done:false
		});

		this.setState({
			text:''
		});
	},
	handleChange:function(e){
		this.setState({
			text:e.target.value
		});
	}
});