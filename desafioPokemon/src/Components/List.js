import React, {Component} from 'react';
import {
	View,
	Text,
	FlatList,
	TouchableOpacity,
} from 'react-native';

class List extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [],
			error: null,
			search: null,

		};
	}

	render() {
		return(
			<View/>	
		)
	}
}

export default List;
