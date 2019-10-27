import Taro from '@tarojs/taro';
import { observable, action } from 'mobx';
import UserStore from '../../../../store/user';

interface IProps {
  user: UserStore;
}

class Store {
  userStore: UserStore;
  @observable school: string = '';

  constructor(props: IProps) {
    this.userStore = props.user;
    this.school = this.userStore.info.school;
  }

  @action
  setSchool = (value: string) => {
    this.school = value;
  };

  @action
  setInfo = (value: string) => {
    const data = {
      id: this.userStore.info.id,
      field: 'school',
      value
    };
    Taro.cloud
      .callFunction({
        name: 'updateUserInfo',
        data
      })
      .then(() => {
        this.userStore.setInfo('school', value);
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export default Store;
