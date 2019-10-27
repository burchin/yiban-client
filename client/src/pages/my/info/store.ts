import Taro from '@tarojs/taro';
import { observable, action } from 'mobx';
import UserStore from '../../../store/user';

interface IProps {
  user: UserStore;
}

class Store {
  userStore: UserStore;

  // 性别数据
  sexData: Array<{ value: string; checked: boolean; text: string }> = [
    { value: '0', checked: true, text: '男' },
    { value: '1', checked: false, text: '女' }
  ];

  constructor(props: IProps) {
    this.userStore = props.user;
  }

  @action
  setUserInfo = (field: string, value: any) => {
    const data = {
      id: this.userStore.info.id,
      field,
      value
    };
    console.log(data);
    Taro.cloud
      .callFunction({
        name: 'updateUserInfo',
        data
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export default Store;
