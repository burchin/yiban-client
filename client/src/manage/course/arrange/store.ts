import { observable, action } from 'mobx';
import { Schedule } from '@model';
import { DBHelper } from '@util';

type Course = {
  _id: string;
  title: string;
};

class Store {
  // 课程列表
  @observable courses: Array<Course> = [{ _id: '', title: '请选择' }];
  // 课程列表选中索引
  @observable selectedCourse: number = 0;
  // 排课信息
  @observable schedule: Schedule = new Schedule();

  @action
  setValue = (key: string, value: any) => {
    this.schedule[key] = value;
  };

  @action
  setSelectedCourse = (value: number) => {
    this.selectedCourse = value;
  };

  @action
  getCourseList = () => {
    DBHelper.db
      .collection('course')
      .field({
        _id: true,
        title: true
      })
      .get()
      .then(res => {
        this.courses = this.courses.concat(res.data);
      });
  };

  @action
  add = () => {};
}

export default Store;
