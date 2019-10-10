import { observable, action } from 'mobx';
import { CourseDetail } from '../../../model';

class Store {
  @observable scrollViewHeight: number = 300;
  @observable course: CourseDetail = {
    id: 1,
    title: 'aaa',
    beginTime: '2019-10-11 09:00:00',
    endTime: '2019-10-11 10:00:00',
    address: 'test',
    person: 10,
    money: 100,
    status: 1,
    detail:
      '<div>test</div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><h2>haha</h2><br/><br/><br/><br/><br/><br/><br/><br/><a href="www.baidu.com">baidu</a><h1>ttt</h1>'
  };

  @action
  setScrollViewHeight = (value: number) => {
    this.scrollViewHeight = value;
  };

  @action
  getDetail = (id: number) => {
    this.course = {
      id: id,
      title: 'aaa',
      beginTime: '2019-10-11 09:00:00',
      endTime: '2019-10-11 10:00:00',
      address: 'test',
      person: 10,
      money: 100,
      status: 1,
      detail:
        '<div>test</div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><h2>haha</h2><br/><br/><br/><br/><br/><br/><br/><br/><a href="www.baidu.com">baidu</a><h1>ttt</h1>'
    };
  };
}

export default Store;
