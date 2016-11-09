import React, {
    Component
} from 'react';
import {
    AppRegistry,
    StyleSheet,
    ListView,
    View
} from 'react-native';
import Message from './message';
import AutoScroll from 'react-native-auto-scroll'

export default class MessageList extends Component {

    render() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })
        this.state = {
            dataSource: ds.cloneWithRows(this.props.messages.slice()),
        };

        /* beautify ignore:start */
        return (
            <AutoScroll
                ref="messageList">
                {this.props.messages.map((msg,id) => {
                    return <Message key={id} message={msg} />
                })}
            </AutoScroll>
        );
        /* beautify ignore:end */
    }
}

const styles = StyleSheet.create({});