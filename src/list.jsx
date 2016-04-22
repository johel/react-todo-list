var React = require('react');
var ListItem = require('./list-item');

module.exports = React.createClass({
	render:function(){
		return <div>
			{this.renderListItems()}
		</div>
	},
	renderListItems:function(){
		var keysArray = Object.keys(this.props.items);
		var result = [];
		if(this.props.items && keysArray.length === 0){
			return <li>Add a todo to get started</li>
		}else{
			
			keysArray.forEach(function(key, index){
				var item = this.props.items[key];
				item.key = key;
				result.push(<ListItem key={index} item={item} />)
			}.bind(this));

			return result;
		}
	}
})