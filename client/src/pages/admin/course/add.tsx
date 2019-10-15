import { ComponentType } from 'react';
import { observer } from '@tarojs/mobx';
import Taro, { Component, Config } from '@tarojs/taro';
import { Text, View } from '@tarojs/components';
import {
  AtForm,
  AtInput,
  AtInputNumber,
  AtSwitch,
  AtTextarea,
  AtButton
} from 'taro-ui';
import { TimePicker } from '../../../components';
import Store from './store';
import './style.scss';

@observer
class AddCourse extends Component {
  store = new Store();
  config: Config = {
    navigationBarTitleText: '创建课程'
  };

  handleChange = (name: string, value: any) => {
    switch (name) {
      case 'title':
        this.store.setValue(name, value);
        break;
      case 'useCoupon':
        this.store.setValue(name, value ? 1 : 0);
        break;
      case 'description':
        this.store.setValue(name, value.detail.value);
        break;
      case 'openTime':
      case 'money':
      case 'exp':
        this.store.setValue(name, Number(value));
        break;
    }
  };

  onTimeChange = (name: string, value: string) => {
    this.store.setValue(name, value);
  };

  onSubmit = e => {
    console.log(e);
    this.store.add();
  };

  onReset = e => {
    console.log(e);
  };

  render() {
    const {
      title,
      beginTime,
      endTime,
      openTime,
      address,
      money,
      experience,
      useCoupon,
      description
    } = this.store;

    return (
      <AtForm
        className="add"
        onSubmit={this.onSubmit.bind(this)}
        onReset={this.onReset.bind(this)}
      >
        <AtInput
          name="title"
          title="名称"
          type="text"
          placeholder="标题名称"
          value={title}
          onChange={this.handleChange.bind(this, 'title')}
        />
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
        <AtInput
          name="address"
          title="地址"
          type="text"
          value={address}
          onChange={this.handleChange.bind(this, 'address')}
        />
        <AtInput
          name="money"
          title="价格"
          type="number"
          placeholder="请输入数字"
          value={money}
          onChange={this.handleChange.bind(this, 'money')}
        />
        <AtInput
          name="exp"
          title="经验值"
          type="number"
          placeholder="请输入数字"
          value={experience}
          onChange={this.handleChange.bind(this, 'exp')}
        />
        <AtSwitch
          title="优惠券是否可用"
          checked={useCoupon == 1 ? true : false}
          onChange={this.handleChange.bind(this, 'useCoupon')}
        />
        <View className="description">
          <Text>描述</Text>
          <AtTextarea
            className="area"
            value={description}
            onChange={this.handleChange.bind(this, 'description')}
            maxLength={200}
            placeholder="课程的描述是..."
          />
        </View>
        <View className="btnContainer">
          <AtButton type="primary" formType="submit">
            提交
          </AtButton>
          <AtButton type="secondary" formType="reset">
            重置
          </AtButton>
        </View>
      </AtForm>
    );
  }
}

export default AddCourse as ComponentType;
