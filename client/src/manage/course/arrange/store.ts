import { observable, action } from 'mobx';
import { Schedule } from '@model';
import { DBHelper, UIHelper } from '@util';

type Course = {
  _id: string;
  title: string;
  money: number;
  experience: number;
};

class Store {
  // 课程列表
  @observable courses: Array<Course> = [
    { _id: '', title: '请选择', money: 0, experience: 0 }
  ];
  // 课程列表选中索引
  @observable selectedCourse: number = 0;
  // 排课信息
  @observable schedule: Schedule = new Schedule();
  // 开始时间
  @observable beginTime: string = '';
  // 结束时间
  @observable endTime: string = '';
  // 开发预约时间
  @observable openTime: number = 24;

  @action
  setValue = (key: string, value: any) => {
    this.schedule[key] = value;
    if (['beginTime', 'endTime', 'openTime'].indexOf(key) != -1) {
      this[key] = value;
    }
  };

  @action
  setSelectedCourse = (value: number) => {
    this.selectedCourse = value;
    this.schedule.courseId = this.courses[value]._id;
  };

  @action
  getCourseList = () => {
    DBHelper.db
      .collection('course')
      .field({
        _id: true,
        title: true,
        money: true,
        experience: true
      })
      .get()
      .then(res => {
        this.courses = this.courses.concat(res.data);
      });
  };

  @action
  add = () => {
    const course = this.courses[this.selectedCourse];
    
    this.schedule = {
      ...this.schedule,
      money: course.money,
      experience: course.experience
    };

    DBHelper.db
      .collection('schedule')
      .add({
        data: this.schedule
      })
      .then(() => {
        UIHelper.showToast('排课成功');
      })
      .catch(() => {
        UIHelper.showToast('排课失败', false);
      });
  };
}

export default Store;
