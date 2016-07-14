import React from 'react';
import {
    View,
    Navigator,
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';
import TabBar from 'react-native-xtabbar';
import Second from '../Second.js';


export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            badge: ' ',
            test: -1,
        };
    }

    _pressButton() {
        this.props.navigator.push({
            title: 'Second',
            component: Second
        })
    }

    componentWillReceiveProps(nextProps) {
      console.log('Main componentWillReceiveProps nextProps.test:' + nextProps.test);
    }

    componentWillUpdate(nextProps, nextState) {
      console.log('Main componentWillUpdate nextState.test:' + nextState.test);
    }

    render() {
            return(
                <View style={styles.container}>
                    <TabBar
                    defaultPage={3}
                    style={styles.content}
                    onItemSelected={(index) => {console.log('current itemindex is ' + index);}}>
                        <TabBar.Item
                            icon={require('./img/home_normal.png')}
                            selectedIcon={require('./img/home_selected.png')}
                            onPress={() => {
                                this.setState({badge: ' ', test: 0,});
                            }}
                            title='首页'>
                            <View style={styles.text}>
                              <Text style={{fontSize: 18}}>Home</Text>
                            </View>
                        </TabBar.Item>

                        <TabBar.Item
                            icon={require('./img/rank_normal.png')}
                            selectedIcon={require('./img/rank_selected.png')}
                            onPress={() => {
                                this.setState({badge: 5, test: 1,});
                            }}
                            title='排行'>
                            <View style={styles.text}>
                              <Text style={{fontSize: 18}}>Rank</Text>
                            </View>
                        </TabBar.Item>

                        <TabBar.Item
                            icon={require('./img/message_normal.png')}
                            selectedIcon={require('./img/message_selected.png')}
                            badge={this.state.badge}
                            onPress={() => {
                                this.setState({badge: '', test: 2,});
                            }}
                            title='消息'>
                            <View style={styles.text}>
                              <Text style={{fontSize: 18}}>Message</Text>
                            </View>
                        </TabBar.Item>

                        <TabBar.Item
                            icon={require('./img/profile_normal.png')}
                            selectedIcon={require('./img/profile_selected.png')}
                            title='我'>
                              <View style={styles.text}>
                                  <Second test={this.state.test} />
                              </View>
                        </TabBar.Item>
                    </TabBar>
                </View>
            );
    }
}

const styles = StyleSheet.create({
  defaultText: {
      fontSize: 20,
      textAlign: 'center',
      margin: 50,
  },
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  content: {
      flex: 1,
  },
  text: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  }
});
