import { ComponentType } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { View, ScrollView, Text, RichText } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import { observer } from '@tarojs/mobx';
import { Px } from '../../../utils';
import Store from './store';

import './style.scss';

@observer
class CourseDetail extends Component {
  store = new Store();
  config: Config = {
    navigationBarTitleText: 'detail'
  };

  componentDidMount() {
    Taro.cloud.callFunction({
      name: 'getOpenid',
      complete: res => {
        console.log(res.result);
      }
    });
  }

  componentDidShow() {
    Taro.getSystemInfo().then(info => {
      this.store.setScrollViewHeight(info.windowHeight - Px.toRpx(120));
    });
  }

  render() {
    const { title, detail } = this.store.course;
    return (
      <View className="box">
        <View className="button">
          <AtButton type="primary">Test</AtButton>
        </View>
        <ScrollView
          scrollY={true}
          style={{ height: this.store.scrollViewHeight + 'px' }}
        >
          <View className="">
            <Text>{title}</Text>
          </View>

          <RichText nodes={detail} />
        </ScrollView>
      </View>
    );
  }
}

export default CourseDetail as ComponentType;
