import { ComponentType } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { View, Button } from '@tarojs/components';
import { observer } from '@tarojs/mobx';

@observer
class Admin extends Component {
  config: Config = {
    navigationBarTitleText: 'Test'
  };

  onClick = (type: string) => {
    let url: string = '';
    switch (type) {
      case 'add':
        url = '../../admin/course/add';
        break;
      case 'arrange':
        url = '../../admin/course/arrange';
        break;
    }
    Taro.navigateTo({ url });
  };

  render() {
    return (
      <View className="index">
        <Button onClick={this.onClick.bind(this, 'add')}>add</Button>
        <Button onClick={this.onClick.bind(this, 'arrange')}>arrange</Button>
      </View>
    );
  }
}

export default Admin as ComponentType;
