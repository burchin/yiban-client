import { ComponentType } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { View, Text, OpenData } from '@tarojs/components';
import { observer, inject } from '@tarojs/mobx';

import './style.scss';

type PageStateProps = {
  userStore: {
    openId: string;
    unionId: string;
  };
};

interface My {
  props: PageStateProps;
}

@inject('userStore')
@observer
class My extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  };

  componentWillMount() {
    console.log(this.props.userStore.openId);
  }

  render() {
    return (
      <View className="box">
        <View className="userinfo">
          <View className="avatar">
            <OpenData type="userAvatarUrl" />
          </View>
          <OpenData type="userNickName" />
        </View>

        <Text>My</Text>
      </View>
    );
  }
}

export default My as ComponentType;
