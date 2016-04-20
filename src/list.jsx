var React = require('react');

module.exports = React.createClass({
	render:function(){
		return <ul>
			{this.renderListItems()}
		</ul>
	},
	renderListItems:function(){
		console.log('itens na lista', this.props.items);
		var keysArray = Object.keys(this.props.items);
		var result = [];
		console.log(keysArray);
		if(this.props.items && keysArray.length === 0){
			return <li>Add a todo to get started</li>
		}else{
			
			keysArray.forEach(function(key, index){
				console.log(this.props.items[key]);
				result.push(<li key={index}>{this.props.items[key].text}</li>)
			}.bind(this));
			
			// for(var key in this.props.items){
			// 	result.push(
			// 		<li>
			// 			{this.props.items[key].text}
			// 		</li>
			// 	)
			// }

			return result;
		}
	}
})