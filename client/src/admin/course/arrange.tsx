import { ComponentType } from 'react';
import { observer } from '@tarojs/mobx';
import Taro, { Component, Config } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtCalendar, AtButton } from 'taro-ui';
import Store from './store';
import './style.scss';

@observer
class ArrangeCourse extends Component {
  store = new Store();
  config: Config = {
    navigationBarTitleText: 'arrange'
  };

  marks = [{ value: '2019/10/18' }, { value: '2019/10/21' }];

  onDayClick = e => {
    console.log(e);
  };

  onMonthChange = e => {
    console.log(e);
  };

  render() {
    return (
      <View>
        <AtCalendar
          marks={this.marks}
          onDayClick={this.onDayClick}
          onMonthChange={this.onMonthChange}
        />

        <AtButton type="primary">arrange</AtButton>
      </View>
    );
  }
}

export default ArrangeCourse as ComponentType;
