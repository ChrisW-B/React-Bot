import React, {
	Component
} from 'react';
import {
	AppRegistry,
	TouchableHighlight,
	Text,
	StyleSheet
} from 'react-native';
import {
	View
} from 'react-native-animatable';

export default class responseButton extends Component {
	render() {
		return (
			<View animation='bounceInUp' delay={this.props.delay}>
				<TouchableHighlight
					underlayColor='blue'
					style={styles.button}
					onPress = {() => this.props.onPress(this.props.res, this.props.text) }> 
	                <Text style={styles.text}>{this.props.text}</Text>
				</TouchableHighlight>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	button: {
		margin: 5,
		marginBottom: 2,
		minWidth: 20,
		maxWidth: 200,
		padding: 10,
		borderRadius: 20,
		borderBottomRightRadius: 0,
		backgroundColor: 'blue'
	},
	text: {
		color: 'white',
	},
})

/*
 	<TouchableHighlight  underlayColor='blue' style={[styles.yesButton, styles.button]}
                    onPress={() => this.update('yes', this.props.yes)}> 
                    <Text style={styles.text}>{this.props.yes}</Text>
	</TouchableHighlight>
    <TouchableHighlight underlayColor= 'blue' style={[styles.noButton, styles.button]} 
        onPress={() => this.update('no', this.props.no)}> 
        <Text style={styles.text}>{this.props.no}</Text>
    </TouchableHighlight>
 */