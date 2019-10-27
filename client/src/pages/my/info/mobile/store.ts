import Taro from '@tarojs/taro';
import { observable, action } from 'mobx';
import UserStore from '../../../../store/user';

interface IProps {
  user: UserStore;
}

class Store {
  userStore: UserStore;
  @observable tel: string = '';

  constructor(props: IProps) {
    this.userStore = props.user;
    this.tel = this.userStore.info.tel;
  }

  @action
  setTel = (value: string) => {
    this.tel = value;
  };

  @action
  setInfo = (value: string) => {
    const data = {
      id: this.userStore.info.id,
      field: 'tel',
      value
    };
    Taro.cloud
      .callFunction({
        name: 'updateUserInfo',
        data
      })
      .then(() => {
        this.userStore.setInfo('tel', value);
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export default Store;
