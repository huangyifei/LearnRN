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
        this.props.navigator.pop();
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

    componentWillReceiveProps(nextProps) {
      console.log('Second componentWillReceiveProps nextProps.test:' + nextProps.test);
    }
    componentWillUpdate(nextProps, nextState) {
      console.log('Second componentWillUpdate nextProps.test:' + nextProps.test);
    }
}

const styles = StyleSheet.create({
  defaultText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 50,
  }
});
