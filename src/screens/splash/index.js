import React, {Component} from 'react';
import {Image, View} from 'react-native';
import styles from './styles';
import {ActivityIndicator} from 'react-native-paper';
import {color_white} from '../../utilities/Utilities';
import {CommonActions} from '@react-navigation/native';

class Splash extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let _this = this;
    this.timeout = setTimeout(function () {
      _this.props.navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Dashboard'}],
        }),
      );
    }, 5000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../../assets/shamiri_logo.png')}
          resizeMode={'contain'}
          style={styles.logo}
        />
        <ActivityIndicator color={color_white} size={30} />
      </View>
    );
  }
}
export default Splash;
