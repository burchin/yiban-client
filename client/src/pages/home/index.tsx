import { ComponentType } from 'react';
import { observer } from '@tarojs/mobx';
import Taro, { Component, Config } from '@tarojs/taro';
import { Image, View, Text } from '@tarojs/components';
import Store from './store';
import './style.scss';

@observer
class Home extends Component {
  store = new Store();
  config: Config = {
    navigationBarTitleText: '关于艺伴'
  };

  componentWillMount() {
    this.store.getIntro();
  }

  render() {
    const { banner, content } = this.store;
    return (
      <View>
        <Image className="banner" mode="widthFix" src={banner} />
        <View className="content">
          <Text>
            进展：\r\n
            2019-10-21 个人中心界面 \r\n
            ===================================
          </Text>
          {content.map(text => (
            <Text key={Math.random()}>{text}</Text>
          ))}
        </View>
      </View>
    );
  }
}

export default Home as ComponentType;
