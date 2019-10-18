import Taro from '@tarojs/taro';
import { observable, action } from 'mobx';

class User {
  @observable openId: string = '';

  constructor() {
    Taro.cloud.callFunction({
      name: 'getOpenid'
    }).then(res => {
      this.openId = res['result'].openId;
    }).catch(err => {
      console.log(err);
    });
  }

  @action
  getUserInfo = () => {
    
  };
}

export default User;
