import Taro from '@tarojs/taro';
import { observable, action } from 'mobx';
import { CourseDetail } from '@model';

class Store {
  @observable scrollViewHeight: number = 300;
  @observable course: CourseDetail = new CourseDetail();

  @action
  setScrollViewHeight = (value: number) => {
    this.scrollViewHeight = value;
  };

  @action
  getDetail = (id: string) => {
    console.log(id);
    Taro.cloud
      .callFunction({
        name: 'getCourseDetail',
        data: { id }
      })
      .then(res => {
        this.course = res['result'];
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export default Store;
