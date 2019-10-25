import Taro from '@tarojs/taro';
import { observable, action } from 'mobx';
import UserStore from '../../../store/user';

interface IProps {
  user: UserStore;
}

class Store {
  userStore: UserStore;
  @observable name: string = '';

  constructor(props: IProps) {
    this.userStore = props.user;
    this.name = this.userStore.info.name;
  }

  @action
  setName = (value: string) => {
    console.log(value);
    this.name = value;
  };

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
