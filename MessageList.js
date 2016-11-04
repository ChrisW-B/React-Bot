import React, {
    Component
} from 'react';
import {
    AppRegistry,
    StyleSheet,
    ListView,
    View
} from 'react-native';
import InvertibleScrollView from 'react-native-invertible-scroll-view';
import Message from './message'

export default class MessageList extends Component {
    render() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        const messageList = this.props.messages.slice();
        this.state = {
            dataSource: ds.cloneWithRows(messageList.reverse()),
        };
        return (
            <ListView 
                enableEmptySections 
                renderScrollComponent={props => <InvertibleScrollView {...props} inverted />
        }
        dataSource = {
            this.state.dataSource
        }
        renderRow = {
            (data) => <Message message={data}/>
        }
        />);
    }
}

const styles = StyleSheet.create({});