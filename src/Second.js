import React from 'react';
import {
    View,
    Navigator,
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';


export default class Main extends React.Component {

    constructor(props) {
        super(props);
    }

    _pressButton() {
        const { navigator } = this.props;
        if(navigator) {
            navigator.pop();
        }
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                    <Text style={styles.defaultText}>返回</Text>
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