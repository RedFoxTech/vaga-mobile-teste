import React, {Component} from 'react';
import {
	View,
	Text,
	FlatList,
	ListItem,
	TouchableOpacity,
} from 'react-native';

class Details extends Component {
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
				<Text>Details COmponent!</Text>
			</View>
		)
	}
}

export default Details;
