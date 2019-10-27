import { ComponentType } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { observer, inject } from '@tarojs/mobx';
import { View, Input } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import UserStore from '../../../../store/user';
import Store from './store';
import './style.scss';

type IProps = {
  userStore: UserStore;
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
    this.store.setInfo(this.store.name);
  };

  render() {
    const { name } = this.store;
    return (
      <View className="box">
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
