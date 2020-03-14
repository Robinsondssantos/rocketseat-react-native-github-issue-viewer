import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import api from '../../services/api';

// import { Container } from './styles';

export default class User extends Component {

  // https://reactnavigation.org/docs/stack-navigator/
  // static navigationOptions = ({ navigation }) => ({
  //   title: navigation.getParam('user').name
  // });

  static ropTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func
    }).isRequired
  }

  state = {
    stars: []
  };

  async componentDidMount() {
    // const { navigation } = this.props;

    // const user = navigation.getParam('user');
    const user = {
      login: 'diego3g'
    }

    const response = await api.get(`/users/${user.login}/starred`);

    this.setState({
      stars: response.data
    });
  }

  render() {
    const { stars } = this.state;

    return (
      <View />
    );
  }
}
