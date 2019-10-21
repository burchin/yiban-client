import { ComponentType } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { View, ScrollView, Text, RichText } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import { observer } from '@tarojs/mobx';
import { UIHelper } from '@util';
import Store from './store';

import './style.scss';

@observer
class CourseDetail extends Component {
  store = new Store();
  config: Config = {
    navigationBarTitleText: 'detail'
  };

  componentWillMount() {
    this.store.getDetail(this.$router.params.id);
  }

  componentDidShow() {
    Taro.getSystemInfo().then(info => {
      this.store.setScrollViewHeight(info.windowHeight - UIHelper.toRpx(120));
    });
  }

  render() {
    const { course } = this.store;
    return (
      <View className="box">
        <View className="button">
          <AtButton type="primary">Test</AtButton>
        </View>
        <ScrollView
          className="scroll"
          scrollY={true}
          style={{ height: this.store.scrollViewHeight + 'px' }}
        >
          <View className="header">
            <Text className="title">{course.title}</Text>
            <Text className="item">
              时间：{course.beginTime} - {course.endTime}
            </Text>
            <Text className="item">地址：{course.address}</Text>
            <Text className="item">上限人数：{course.max}</Text>
          </View>

          <View className="content">
            <RichText nodes={course.description} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default CourseDetail as ComponentType;
