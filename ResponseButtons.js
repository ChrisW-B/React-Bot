import React, {
    Component
} from 'react';
import {
    AppRegistry,
    StyleSheet
} from 'react-native';
import ResButton from './resButton';
import {
    View
} from 'react-native-animatable';

export default class ResponseButtons extends Component {
    render() {
        return (
            <ButtonView {...this.props} />
        );
    }
}

class ButtonView extends Component {
    constructor(props) {
        super(props);
        this.update = this.update.bind(this);
    }

    render() {
        return (
            <View ref='buttons' style={styles.viewStyle}>
                <ResButton delay={0} onPress={(res, text) => this.update(res, text, this.props.ws)} res='yes' text={this.props.yes}/>
                <ResButton delay={100} onPress={(res, text) => this.update(res, text, this.props.ws)} res='no'  text={this.props.no} />
            </View>
        );
    }

    update(res, text) {
        setTimeout(() => this.props.addMessage(text, true), 100);
        setTimeout(() => this.props.addMessage('...', false), 300);
        this.refs.buttons.bounceOutDown();
        this.props.ws.send(res);
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'flex-end',
        padding: 10
    }
});