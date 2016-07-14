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
        };
    }

    _pressButton() {
        this.props.navigator.push({
            title: 'Second',
            component: Second
        })
    }

    render() {
            return(
                <View style={styles.container}>
                    <TabBar
                    defaultPage={2}
                    style={styles.content}
                    onItemSelected={(index) => {console.log('current itemindex is ${index}');}}>
                        <TabBar.Item
                            icon={require('./img/home_normal.png')}
                            selectedIcon={require('./img/home_selected.png')}
                            onPress={() => {
                                this.setState({badge: ' ',});
                            }}
                            title='首页'>
                            <View style={styles.text}>
                              <Text style={{fontSize: 18}}>Home</Text>
                            </View>
                        </TabBar.Item>

                        <TabBar.Item
                            icon={require('./img/rank_normal.png')}
                            selectedIcon={require('./img/rank_selected.png')}
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
                                this.setState({badge: '',});
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
                                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                                  <Text style={{fontSize: 18}}>Me</Text>
                                </TouchableOpacity>
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
