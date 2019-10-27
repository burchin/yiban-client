import Taro from '@tarojs/taro';
import { observable, action } from 'mobx';
import UserStore from '../../../../store/user';

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
    this.name = value;
  };

  @action
  setInfo = (value: string) => {
    Taro.cloud
      .callFunction({
        name: 'updateUserInfo',
        data: {
          id: this.userStore.info.id,
          field: 'name',
          value
        }
      })
      .then(() => {
        this.userStore.setInfo('name', value);
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export default Store;
