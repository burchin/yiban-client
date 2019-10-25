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

interface UserName {
  props: IProps;
}

@inject('userStore')
@observer
class UserName extends Component {
  store = new Store({
    user: this.props.userStore
  });
  config: Config = {
    navigationBarTitleText: '更改姓名'
  };

  onChange = e => {
    this.store.setName(e.detail.value);
  };

  onClick = () => {
    this.store.setUserInfo('name', this.store.name);
  };

  render() {
    const { name } = this.store;
    return (
      <View style={{ padding: '16px' }}>
        <Input
          className="input"
          value={name}
          onInput={this.onChange}
        />
        <AtButton type="primary" onClick={this.onClick}>
          保存
        </AtButton>
      </View>
    );
  }
}

export default UserName as ComponentType;
