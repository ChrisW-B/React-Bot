import React, {
    Component
} from 'react';
import {
    AppRegistry,
    View
} from 'react-native';
import MessageList from './MessageList';
import ResponseButtons from './ResponseButtons';

export default class RenderDate extends Component {
    constructor(props) {
        super(props);
        const self = this;
        this.ws = new WebSocket('ws://localhost:3000/');
        this.state = {
            messages: []
        }
        this.ws.onmessage = (e) => {
            const res = JSON.parse(e.data);
            let messageList = self.state.messages.slice();
            messageList.push({
                user: false,
                text: res.message
            });
            self.setState({
                pos: res.pos,
                neg: res.neg,
                messages: messageList
            });
        };
    }

    render() {
        return (
            <View style={{flex:1,flexDirection:'column', paddingTop: 22}}>
                <MessageList messages={this.state.messages} />
                <ResponseButtons yes={this.state.pos} no={this.state.neg} ws={this.ws} messages={this.state.messages} />
            </View>
        );
    }
}