import Taro from '@tarojs/taro';
import { action } from 'mobx';

class Store {
  @action
  join = () => {
    Taro.cloud.callFunction({
      name: 'joinUser'
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  }
}

export default Store;
