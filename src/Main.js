import React from 'react';
import {
    View,
    Navigator,
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';
import Second from './Second.js';


export default class Main extends React.Component {

    constructor(props) {
        super(props);
    }

    _pressButton() {
        this.props.navigator.push({
            title: 'Second',
            component: Second
        })
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                    <Text style={styles.defaultText}>跳往Second</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  defaultText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 50,
  }
});