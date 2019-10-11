import Taro from '@tarojs/taro';
import { observable } from 'mobx';

class User {
  @observable openId: string = '';

  constructor() {
    Taro.cloud.callFunction({
      name: 'getOpenid',
      complete: res => {
        this.openId = res['result'].openId;
      }
    });
  }
}

export default User;
