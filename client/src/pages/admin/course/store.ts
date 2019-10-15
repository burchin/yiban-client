import { observable, action } from 'mobx';

class Store {
  @observable title: string = '';
  @observable beignTime: string = '';

  @action
  setValue = (field: string, value: string) => {
    this.beignTime = value;
  };
}

export default Store;
