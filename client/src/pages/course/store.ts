import Taro from '@tarojs/taro';
import { observable, action } from 'mobx';
import { ScheduleListItem } from '../../model';

class Store {

  @observable list: Array<ScheduleListItem> = [];

  @action
  getList = () => {
    Taro.cloud.callFunction({
      name: 'getCourseList'
    }).then(res => {
      this.list = res['result'];
    }).catch(err => {
      console.log(err);
    });
  }
}

export default Store;
