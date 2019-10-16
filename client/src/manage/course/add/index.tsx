import { ComponentType } from 'react';
import { observer } from '@tarojs/mobx';
import Taro, { Component, Config } from '@tarojs/taro';
import { Text, View } from '@tarojs/components';
import { AtForm, AtInput, AtSwitch, AtTextarea, AtButton } from 'taro-ui';
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
      case 'money':
      case 'exp':
      case 'max':
        this.store.setValue(name, Number(value));
        break;
      case 'title':
      case 'useCoupon':
        this.store.setValue(name, value);
        break;
      case 'description':
        this.store.setValue(name, value.detail.value);
        break;
      
    }
  };

  onSubmit = () => {
    this.store.add();
  };

  onReset = e => {
    console.log(e);
  };

  render() {
    const { course } = this.store;

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
          value={course.title}
          onChange={this.handleChange.bind(this, 'title')}
        />
        <AtInput
          name="max"
          title="上限人数"
          type="number"
          placeholder="请输入数字"
          value={course.max}
          onChange={this.handleChange.bind(this, 'max')}
        />
        <AtInput
          name="address"
          title="地址"
          type="text"
          value={course.address}
          onChange={this.handleChange.bind(this, 'address')}
        />
        <AtInput
          name="money"
          title="价格"
          type="number"
          placeholder="请输入数字"
          value={course.money}
          onChange={this.handleChange.bind(this, 'money')}
        />
        <AtInput
          name="exp"
          title="经验值"
          type="number"
          placeholder="请输入数字"
          value={course.experience}
          onChange={this.handleChange.bind(this, 'exp')}
        />
        <AtSwitch
          title="优惠券是否可用"
          checked={course.useCoupon}
          onChange={this.handleChange.bind(this, 'useCoupon')}
        />
        <View className="description">
          <Text>描述</Text>
          <AtTextarea
            className="area"
            value={course.description}
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
