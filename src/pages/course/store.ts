import { observable } from 'mobx';
import { Course } from '../../model';

class Store {
  @observable list: Array<Course> = [
    {
      title: 'aaa',
      beginTime: '09:00',
      endTime: '10:00',
      address: 'bbb',
      money: 100,
      status: 1
    },
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
