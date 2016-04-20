var React = require('react');

module.exports = React.createClass({
	render:function(){
		return <div className="input-group">
			<input type="text" className="form-control" />
			<div className="input-group-btn">
				<button type="button" className="btn btn-default"> Add Task</button>
			</div>
		</div>
	}
});