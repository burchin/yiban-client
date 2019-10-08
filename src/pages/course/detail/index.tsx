import { ComponentType } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { View, Text, RichText } from '@tarojs/components';
import { observer } from '@tarojs/mobx';
import Store from './store';

import './style.scss';

@observer
class CourseDetail extends Component {
  store = new Store();
  config: Config = {
    navigationBarTitleText: 'detail'
  };

  componentDidMount() {
    this.store.getDetail(1);
  }

  render() {
    const { title, detail } = this.store.course;
    return (
      <View className="box">
        <Text>{title}</Text>
        <RichText nodes={detail} />
      </View>
    );
  }
}

export default CourseDetail as ComponentType;
