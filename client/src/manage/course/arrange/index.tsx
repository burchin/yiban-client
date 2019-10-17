import { ComponentType } from 'react';
import { observer } from '@tarojs/mobx';
import Taro, { Component, Config } from '@tarojs/taro';
import { View, Text, Picker } from '@tarojs/components';
import { AtInput, AtForm, AtInputNumber } from 'taro-ui';
import { TimePicker } from '@component';
import Store from './store';
import './style.scss';

@observer
class AddSchedule extends Component {
  store = new Store();
  config: Config = {
    navigationBarTitleText: 'schedule'
  };

  componentWillMount() {
    this.store.setValue('date', this.$router.params.date);
    this.store.getCourseList();
  }

  handleChange = (name: string, value: any) => {
    if (name == 'course') {
      this.store.setSelectedCourse(Number(value.detail.value));
    }
  };

  onTimeChange = (name: string, value: string) => {
    this.store.setValue(name, value);
  };

  onSubmit = e => {
    console.log(e);
  };

  onReset = e => {
    console.log(e);
  };

  render() {
    const { courses, selectedCourse, schedule } = this.store;
    return (
      <AtForm
        className="schedule"
        onSubmit={this.onSubmit.bind(this)}
        onReset={this.onReset.bind(this)}
      >
        <AtInput
          disabled
          name="date"
          title="日期"
          type="text"
          value={schedule.date}
          onChange={this.handleChange.bind(this, 'name')}
        />
        <Picker
          mode="selector"
          range={courses}
          rangeKey="title"
          value={selectedCourse}
          onChange={this.handleChange.bind(this, 'course')}
        >
          <View className="formItem">
            <Text>课程</Text>
            <Text className="value">{courses[selectedCourse].title}</Text>
          </View>
        </Picker>
        <TimePicker
          name="beginTime"
          title="开始时间"
          value={schedule.beginTime}
          onChange={this.onTimeChange.bind(this)}
        />
        <TimePicker
          name="endTime"
          title="结束时间"
          value={schedule.endTime}
          onChange={this.onTimeChange.bind(this)}
        />
        <View className="formItem">
          <Text>开放预约</Text>
          <AtInputNumber
            type="number"
            min={1}
            max={48}
            step={1}
            value={schedule.openTime}
            onChange={this.handleChange.bind(this, 'openTime')}
          />
        </View>
      </AtForm>
    );
  }
}

export default AddSchedule as ComponentType;
