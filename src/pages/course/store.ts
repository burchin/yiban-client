import { observable } from 'mobx';
import { Course } from '../../model';

class Store {
  @observable list: Array<Course> = [
    {
      id: 1,
      title: 'aaa',
      beginTime: '09:00',
      endTime: '10:00',
      address: 'bbb',
      money: 100,
      status: 1
    },
    {
      id: 2,
      title: '测试',
      beginTime: '09:00',
      endTime: '10:00',
      address: '地址',
      money: 100,
      status: 1
    }
  ];
}

export default Store;
