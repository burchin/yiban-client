import { ComponentType } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { View, Picker } from '@tarojs/components';
import { AtForm, AtInput } from 'taro-ui';
import { TimePicker } from '../../../components';
import { observer } from '@tarojs/mobx';
import Store from './store';

@observer
class AddCourse extends Component {
  store = new Store();
  config: Config = {
    navigationBarTitleText: '创建课程'
  };

  componentWillMount() {}

  handleChange = value => {};

  onTimeChange = (name: string, value: string) => {
    switch (name) {
      case 'beginTime':
        this.store.setBeginTime(value);
        break;
      case 'endTime':
        this.store.setEndTime(value);
        break;
    }
  };

  render() {
    const { title, beignTime, endTime } = this.store;
    console.log(beignTime);
    return (
      <AtForm>
        <AtInput
          name="title"
          title="名称"
          type="text"
          placeholder="标题名称"
          value={title}
          onChange={this.handleChange.bind(this)}
        />
        <TimePicker
          name="beginTime"
          title="开始时间"
          value={beignTime}
          onChange={this.onTimeChange.bind(this)}
        />
        <TimePicker
          name="endTime"
          title="结束时间"
          value={endTime}
          onChange={this.onTimeChange.bind(this)}
        />
      </AtForm>
    );
  }
}

export default AddCourse as ComponentType;
