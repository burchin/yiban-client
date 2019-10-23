import { ComponentType } from 'react';
import { Component, Config } from '@tarojs/taro';
import { observer, inject } from '@tarojs/mobx';
import { AtList, AtListItem } from 'taro-ui';

import { User } from '@model';

type IProps = {
  userStore: {
    info: User;
  };
};

interface UserInfo {
  props: IProps;
}

@inject('userStore')
@observer
class UserInfo extends Component {
  config: Config = {
    navigationBarTitleText: '个人资料'
  };

  isEmpty = (value: string) => {
    return value == '' ? '未填写' : value;
  };

  render() {
    const { info } = this.props.userStore;
    return (
      <AtList>
        <AtListItem title="姓名" extraText={this.isEmpty(info.name)} arrow="right" />
        <AtListItem
          title="性别"
          extraText={info.sex ? '女' : '男'}
          arrow="right"
        />
        <AtListItem title="年龄" extraText={`${info.age}岁`} arrow="right" />
        <AtListItem title="联系电话" extraText={this.isEmpty(info.tel)} arrow="right" />
        <AtListItem title="生日" extraText={this.isEmpty(info.birthday)} arrow="right" />
        <AtListItem title="学校" extraText={this.isEmpty(info.school)} arrow="right" />
        <AtListItem title="加入时间" extraText={info.joinTime} />
      </AtList>
    );
  }
}

export default UserInfo as ComponentType;
