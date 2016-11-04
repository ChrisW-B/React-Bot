import React, {
    Component
} from 'react';
import {
    AppRegistry,
    TouchableHighlight,
    Text,
    View,
    StyleSheet
} from 'react-native';

export default class MessageList extends Component {
    render() {
        return (
            <View style={styles.viewStyle}>
                <TouchableHighlight  underlayColor='green' style={[styles.yesButton, styles.button]}
                    onPress={() => {
                        this.props.ws.send('yes');
                        this.props.messages.push({
                            user: true,
                            text: this.props.yes
                        })
                    }}> 
                    <Text style={styles.text}>{this.props.yes}</Text>
                </TouchableHighlight>
                <TouchableHighlight underlayColor= 'red' style={[styles.noButton, styles.button]} 
                    onPress={() => {
                        this.props.ws.send('no');
                        this.props.messages.push({
                            user: true,
                            text: this.props.no
                        })}}> 
                    <Text style={styles.text}>{this.props.no}</Text>
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
        borderBottomRightRadius: 0
    },
    text: {
        color: 'white',
    },
    yesButton: {
        backgroundColor: 'green',
    },
    noButton: {
        backgroundColor: 'red',
    },
    viewStyle: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'flex-end',
        padding: 10
    }
});