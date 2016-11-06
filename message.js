import React, {
	Component
} from 'react';
import {
	StyleSheet,
	TouchableHighlight,

} from 'react-native';
import {
	Text,
	View
} from 'react-native-animatable';


export default class Message extends Component {
	render() {
		const messageType = this.props.message.user ? styles.userMessage : styles.compMessage,
			viewType = this.props.message.user ? styles.userView : styles.compView;
		animationType = this.props.message.user ? 'bounceInRight' : 'bounceInLeft';
		return (
			<View animation={animationType} duration={2000} style={[styles.viewStyle, viewType]}>
				<TouchableHighlight style={[styles.message, messageType]}> 
                    <Text style={styles.text}>{this.props.message.text}</Text>
                </TouchableHighlight>
    		</View>
		);
	}
}

const styles = StyleSheet.create({
	viewStyle: {
		flex: 1,
		flexDirection: 'row',
		padding: 5,
	},
	userView: {
		justifyContent: 'flex-end'
	},
	compView: {
		justifyContent: 'flex-start'
	},
	message: {
		marginBottom: 2,
		minWidth: 20,
		maxWidth: 150,
		padding: 7,
		borderRadius: 15,
	},
	userMessage: {
		borderBottomRightRadius: 0,
		backgroundColor: 'grey',

	},
	compMessage: {
		borderTopLeftRadius: 0,
		backgroundColor: 'skyblue',
		alignSelf: 'flex-start'
	},
	text: {
		color: 'white',
		margin: 2,
		flexWrap: 'wrap',

	}
});