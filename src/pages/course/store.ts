import { observable } from 'mobx';

class Store {
  @observable list: Array<object> = [
    {
      title: 'aaa',
      beginTime: '09:00',
      endTime: '10:00',
      address: 'bbb',
      money: 100,
      status: 1
    }
  ];
}

export default Store;
