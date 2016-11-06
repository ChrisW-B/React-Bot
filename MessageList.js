import React, {
    Component
} from 'react';
import {
    AppRegistry,
    StyleSheet,
    ListView,
    ScrollView,
    View
} from 'react-native';
import Message from './message';

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
            <ListView
                ref="listView"
                enableEmptySections 
                renderScrollComponent = {props => <ScrollView {...props}/>}
                dataSource = {this.state.dataSource}
                renderRow = {(data) => <Message message={data}/>}
            />
        );
        /* beautify ignore:end */
    }
}

const styles = StyleSheet.create({});