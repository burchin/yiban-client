import { ComponentType } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { View, Picker } from '@tarojs/components';
import { AtForm, AtInput } from 'taro-ui';
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

  onTimeChange = e => {
      this.store.setValue('beginTime', e.detail.value);
  };

  render() {
    const { title, beignTime } = this.store;
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
        <Picker
          mode="time"
          value={beignTime}
          onChange={this.onTimeChange.bind(this)}
        >
          <View className="picker">当前选择：{beignTime}</View>
        </Picker>
      </AtForm>
    );
  }
}

export default AddCourse as ComponentType;
