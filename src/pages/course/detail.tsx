import { ComponentType } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { observer } from '@tarojs/mobx';
import Store from './store';

@observer
class CourseDetail extends Component {
  store = new Store(); 
  config: Config = {
    navigationBarTitleText: 'detail'
  };

  render() {
    return (
      <View>
        <Text>Detail</Text>
      </View>
    );
  }
}

export default CourseDetail as ComponentType;
