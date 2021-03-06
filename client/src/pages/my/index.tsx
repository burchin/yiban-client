import { ComponentType } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { observer, inject } from '@tarojs/mobx';
import { View, Text, OpenData } from '@tarojs/components';
import { AtButton, AtList, AtListItem } from 'taro-ui';
import { User } from '@model';
import Store from './store';
import './style.scss';

type IProps = {
  userStore: {
    info: User;
  };
};

interface My {
  props: IProps;
}

@inject('userStore')
@observer
class My extends Component {
  store = new Store();
  config: Config = {
    navigationBarTitleText: '个人中心'
  };

  onJoin = () => {
    this.store.join();
  };

  onClick = (type: string) => {
    switch (type) {
      case 'info':
        Taro.navigateTo({ url: './info/index' });
        break;
    }
  };

  render() {
    const { info } = this.props.userStore;
    return (
      <View className="box">
        <View className="info">
          <View className="avatar">
            <OpenData type="userAvatarUrl" />
          </View>
          <View className="nickName">
            <OpenData type="userNickName" className="name" />
            {info.id == '' && (
              <AtButton type="primary" size="small" circle={true} onClick={this.onJoin}>
                点击加入
              </AtButton>
            )}
          </View>
        </View>
        <View className="money">
          <Text>金币 {info.money}</Text>
          <Text>优惠券 {info.coupon}</Text>
          <Text>积分 {info.experience}</Text>
        </View>
        <AtList>
          {info.id != '' && (
            <AtListItem
              title="个人资料"
              arrow="right"
              onClick={this.onClick.bind(this, 'info')}
            />
          )}
          <AtListItem title="我的课程" arrow="right" />
          <AtListItem title="我的订单" arrow="right" />
        </AtList>
      </View>
    );
  }
}

export default My as ComponentType;
