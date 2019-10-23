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

  render() {
    const { info } = this.props.userStore;

    return (
      <AtList>
        <AtListItem title="姓名" extraText={info.name} arrow="right" />
        <AtListItem title="性别" extraText={User.Sex[info.sex]} arrow="right" />
        <AtListItem title="年龄" extraText={String(info.age)} arrow="right" />
        <AtListItem title="联系电话" extraText={info.tel} arrow="right" />
        <AtListItem title="生日" extraText={info.birthday} arrow="right" />
        <AtListItem title="学校" extraText={info.school} arrow="right" />
        <AtListItem title="加入时间" extraText={info.joinTime} arrow="right" />
      </AtList>
    );
  }
}

export default UserInfo as ComponentType;
