import { ComponentType } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { View, Button } from '@tarojs/components';
import { observer } from '@tarojs/mobx';

@observer
class Admin extends Component {
  config: Config = {
    navigationBarTitleText: 'Test'
  };

  componentWillMount() {}

  onClick = (type: string) => {
    switch (type) {
      case 'add':
        Taro.navigateTo({ url: './course/add' });
        break;
    }
  };

  render() {
    return (
      <View className="index">
        <Button onClick={this.onClick.bind(this, 'add')}>add</Button>
      </View>
    );
  }
}

export default Admin as ComponentType;
