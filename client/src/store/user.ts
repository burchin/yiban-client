import Taro from '@tarojs/taro';
import { observable, action } from 'mobx';
import { User } from '@model';

class UserStore {
  @observable info: User = new User();

  constructor() {
    Taro.cloud.callFunction({
      name: 'getUserInfo'
    }).then(res => {
      if (res.result.id == undefined) {
        this.info.openId = res.result.openId;
      } else {
        this.info = res.result;
      }
    }).catch(err => {
      console.log(err);
    });
  }

  @action
  setInfo = (field: string, value: any) => {
    this.info[field] = value;
  };
}

export default UserStore;
