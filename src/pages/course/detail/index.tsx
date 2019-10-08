import { ComponentType } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { View, ScrollView, Text, RichText } from '@tarojs/components';
import { AtButton } from 'taro-ui';
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
        <View>
          <AtButton type="primary">Test</AtButton>
        </View>
        <ScrollView className="body" scrollY={true}>
          <Text>{title}</Text>
          <RichText nodes={detail} />
        </ScrollView>
      </View>
    );
  }
}

export default CourseDetail as ComponentType;
