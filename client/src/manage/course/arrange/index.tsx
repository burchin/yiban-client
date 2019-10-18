import { ComponentType } from 'react';
import { observer } from '@tarojs/mobx';
import Taro, { Component, Config } from '@tarojs/taro';
import { View, Text, Picker } from '@tarojs/components';
import { AtInput, AtForm, AtInputNumber, AtButton } from 'taro-ui';
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
    } else {
      this.store.setValue('openTime', Number(value));
    }
  };

  onTimeChange = (name: string, value: string) => {
    this.store.setValue(name, value);
  };

  onSubmit = () => {
    this.store.add();
  };

  onReset = () => {
    Taro.navigateBack();
  };

  render() {
    const {
      courses,
      selectedCourse,
      schedule,
      beginTime,
      endTime,
      openTime
    } = this.store;

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
          value={beginTime}
          onChange={this.onTimeChange.bind(this)}
        />
        <TimePicker
          name="endTime"
          title="结束时间"
          value={endTime}
          onChange={this.onTimeChange.bind(this)}
        />
        <View className="formItem">
          <Text>开放预约</Text>
          <AtInputNumber
            type="number"
            min={1}
            max={48}
            step={1}
            value={openTime}
            onChange={this.handleChange.bind(this, 'openTime')}
          />
        </View>
        <View className="btnContainer">
          <AtButton type="primary" formType="submit">
            提交
          </AtButton>
          <AtButton type="secondary" formType="reset">
            取消
          </AtButton>
        </View>
      </AtForm>
    );
  }
}

export default AddSchedule as ComponentType;
