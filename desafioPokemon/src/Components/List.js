import React, {Component} from 'react';
import {
	View,
	Text,
	FlatList,
	ListItem,
	TouchableOpacity,
} from 'react-native';

class List extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [],
			loading: false,
			error: null,
			search: null,

		};
	}

	render() {
		return(
			<View>
				<Text>List component = Home!</Text>
			</View>
		)
	}
}

export default List;
