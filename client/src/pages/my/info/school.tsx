import { ComponentType } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { observer, inject } from '@tarojs/mobx';
import { View, Input } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import { User } from '@model';
import Store from './store';
import './style.scss';

type IProps = {
  userStore: {
    info: User;
  };
};

interface UserSchool {
  props: IProps;
}

@inject('userStore')
@observer
class UserSchool extends Component {
  store = new Store({
    user: this.props.userStore
  });
  config: Config = {
    navigationBarTitleText: '更改学校'
  };

  onChange = e => {
    this.store.setName(e.detail.value);
  };

  onClick = () => {
    this.store.setUserInfo('school', this.store.school);
  };

  render() {
    const { school } = this.store;
    return (
      <View className="box">
        <Input
          className="input"
          value={school}
          onInput={this.onChange}
        />
        <AtButton type="primary" onClick={this.onClick}>
          保存
        </AtButton>
      </View>
    );
  }
}

export default UserSchool as ComponentType;
