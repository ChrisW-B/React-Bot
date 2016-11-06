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
        this.addMessage = this.addMessage.bind(this);
        this.removeLastMessage = this.removeLastMessage.bind(this);
        this.ws = new WebSocket('ws://localhost:3000/');
        this.state = {
            messages: [{
                user: false,
                text: '...'
            }],
            resButtons: false
        }
        this.ws.onmessage = (e) => {
            self.setState({
                resButtons: false
            });
            setTimeout(() => {
                const res = JSON.parse(e.data);
                self.setState({
                    pos: res.pos,
                    neg: res.neg,
                    resButtons: true
                });
                this.removeLastMessage();
                res.message.forEach(
                    ele => this.addMessage(ele, false)
                );
            }, 2000);
        };
    }
    removeLastMessage() {
        let messageList = this.state.messages;
        messageList.pop();
        console.log(messageList);
        this.setState({
            messages: messageList
        });
    }
    addMessage(message, isUser) {
        let messageList = this.state.messages;
        messageList.push({
            text: message,
            user: isUser
        });
        this.setState({
            messages: messageList
        });
    }

    render() {
        return (
            <View style={{flex:1,flexDirection:'column', paddingTop: 22}}>
                <MessageList messages={this.state.messages} />
                <ResponseButtons 
                    resButtons={this.state.resButtons} 
                    yes={this.state.pos} 
                    no={this.state.neg} 
                    ws={this.ws} 
                    addMessage={this.addMessage} />
            </View>
        );
    }
}