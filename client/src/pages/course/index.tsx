import { ComponentType } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { observer } from '@tarojs/mobx';
import { CourseCard } from '../../components';
import Store from './store';

@observer
class Course extends Component {
  store = new Store(); 
  config: Config = {
    navigationBarTitleText: 'BBB'
  };

  render() {
    return (
      <View>
        {this.store.list.map(item => (
          <View key={item.id}>
            <CourseCard data={item} style="margin: 16rpx" />
          </View>
        ))}
      </View>
    );
  }
}

export default Course as ComponentType;
