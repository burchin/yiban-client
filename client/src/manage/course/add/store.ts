import { observable, action } from 'mobx';
import { Course } from '@model';
import { DBHelper, UIHelper } from '@util';

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
      data: this.course
    }).then(() => {
      UIHelper.showToast('创建成功');
    }).catch(() => {
      UIHelper.showToast('创建失败', false);
    });
  };
}

export default Store;
