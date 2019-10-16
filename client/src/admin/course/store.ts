import Taro from '@tarojs/taro';
import { observable, action } from 'mobx';
import { Course } from '@model';
import { DBHelper } from '@util';

class Store {
  // 课程
  @observable course: Course = new Course();

  @action
  setValue = (key: string, value: any) => {
    this.course[key] = value;
  };

  @action
  add = () => {
    DBHelper.db.collection('course').add({
      data: this.course,
      success: () => {
        Taro.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })
      }
    });
  };
}

export default Store;
