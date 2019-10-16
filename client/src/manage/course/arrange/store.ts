import Taro from '@tarojs/taro';
import { observable, action } from 'mobx';
import { Schedule } from '@model';

class Store {
  @observable schedule: Schedule = new Schedule();

  @action
  setValue = (key: string, value: any) => {
    this.schedule[key] = value;
  };
}

export default Store;
