import { ComponentType } from 'react';
import { observer } from '@tarojs/mobx';
import Taro, { Component, Config } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtCalendar, AtButton, AtList, AtListItem } from 'taro-ui';
import './style.scss';

@observer
class ArrangeCourse extends Component {
  config: Config = {
    navigationBarTitleText: 'arrange'
  };

  onDayClick = e => {
    console.log(e);
  };

  onMonthChange = e => {
    console.log(e);
  };

  onClick = () => {
    Taro.navigateTo({ url: '../arrange/index?date=2019-10-20' });
  };

  render() {
    return (
      <View className="arrange">
        <AtCalendar
          // marks={this.marks}
          onDayClick={this.onDayClick}
          onMonthChange={this.onMonthChange}
        />
        <View className="list">
          <AtButton type="primary" onClick={this.onClick}>
            arrange
          </AtButton>
          <AtList>
            <AtListItem title="标题文字1" note="描述信息" />
            <AtListItem title="标题文字2" note="描述信息" />
            <AtListItem title="标题文字3" note="描述信息" />
            <AtListItem title="标题文字1" note="描述信息" />
            <AtListItem title="标题文字2" note="描述信息" />
            <AtListItem title="标题文字3" note="描述信息" />
          </AtList>
        </View>
      </View>
    );
  }
}

export default ArrangeCourse as ComponentType;
