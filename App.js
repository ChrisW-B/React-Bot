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
        this.respond = this.respond.bind(this);
        this.ws = new WebSocket('ws://localhost:3000/');
        this.state = {
            messages: [{
                user: false,
                text: '...'
            }]
        }
        this.ws.onmessage = (e) => {
            const res = JSON.parse(e.data);
            setTimeout(() => this.respond(res.pos, res.neg, res.message), 2000);
        };
    }

    respond(pos, neg, message) {
        this.setState({
            pos: pos,
            neg: neg
        });
        this.removeLastMessage();
        let delayInc = 2;
        message.forEach(
            ele => {
                setTimeout(() => this.addMessage(ele, false), delayInc * 100);
                delayInc++
            }
        );
    }

    removeLastMessage() {
        let messageList = this.state.messages;
        messageList.pop();
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
                    yes={this.state.pos} 
                    no={this.state.neg} 
                    ws={this.ws} 
                    addMessage={this.addMessage} />
            </View>
        );
    }
}