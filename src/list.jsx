var React = require('react');
var ListItem = require('./list-item');

module.exports = React.createClass({
	render:function(){
		return <div>
			{this.renderListItems()}
		</div>
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
				var item = this.props.items[key];
				item.key = key;
				// console.log('item', item);
				result.push(<ListItem key={index} item={item} />)
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