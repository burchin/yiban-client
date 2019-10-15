import { observable, action } from 'mobx';

class Store {
  @observable title: string = '';
  @observable beignTime: string = '';
  @observable endTime: string = '';

  @action
  setBeginTime = (value: string) => {
    this.beignTime = value;
  };

  @action
  setEndTime = (value: string) => {
    this.endTime = value;
  }
}

export default Store;
