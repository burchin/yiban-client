import { ComponentType } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { observer, inject } from '@tarojs/mobx';
import { View, Button, Radio, RadioGroup } from '@tarojs/components';
import {
  AtList,
  AtListItem,
  AtModal,
  AtModalHeader,
  AtModalContent,
  AtModalAction
} from 'taro-ui';
import UserStore from '../../../store/user';
import Store from './store';

type IProps = {
  userStore: UserStore;
};

interface UserInfo {
  props: IProps;
}

@inject('userStore')
@observer
class UserInfo extends Component {
  store = new Store({
    user: this.props.userStore
  });
  config: Config = {
    navigationBarTitleText: '个人资料'
  };

  isEmpty = (value: string) => {
    return value == '' ? '未填写' : value;
  };

  onClick = (type: string) => {
    switch (type) {
      case 'name':
        Taro.navigateTo({ url: './name/index' });
        break;
      case 'school':
        Taro.navigateTo({ url: './school/index' });
        break;
      case 'tel':
        Taro.navigateTo({ url: './mobile/index' });
        break;
    }
  };

  handleChange = () => {};

  render() {
    const { info } = this.props.userStore;
    return (
      <View>
        <AtList>
          <AtListItem
            title="姓名"
            extraText={this.isEmpty(info.name)}
            arrow="right"
            onClick={this.onClick.bind(this, 'name')}
          />
          <AtListItem
            title="性别"
            extraText={info.sex ? '女' : '男'}
            arrow="right"
          />
          <AtListItem title="年龄" extraText={`${info.age}岁`} arrow="right" />
          <AtListItem
            title="联系电话"
            extraText={this.isEmpty(info.tel)}
            arrow="right"
            onClick={this.onClick.bind(this, 'tel')}
          />
          <AtListItem
            title="生日"
            extraText={this.isEmpty(info.birthday)}
            arrow="right"
          />
          <AtListItem
            title="学校"
            extraText={this.isEmpty(info.school)}
            arrow="right"
            onClick={this.onClick.bind(this, 'school')}
          />
          <AtListItem title="加入时间" extraText={info.joinTime} />
        </AtList>
        <AtModal isOpened={false}>
          <AtModalHeader>标题</AtModalHeader>
          <AtModalContent>
            <RadioGroup>
              {this.store.sexData.map(item => {
                return (
                  <View>
                    <Radio
                      value={item.value}
                      checked={item.checked}
                      color="#6190E8"
                    >
                      {item.text}
                    </Radio>
                  </View>
                );
              })}
            </RadioGroup>
          </AtModalContent>
          <AtModalAction>
            <Button>取消</Button> <Button>确定</Button>{' '}
          </AtModalAction>
        </AtModal>
      </View>
    );
  }
}

export default UserInfo as ComponentType;
