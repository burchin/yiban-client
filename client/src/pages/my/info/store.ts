import Taro from '@tarojs/taro';
import { observable, action } from 'mobx';
import UserStore from '../../../store/user';

interface IProps {
  user: UserStore;
}

class Store {
  userStore: UserStore;
  // 性别数据
  sexData: Array<{ value: string; checked: boolean; text: string }> = [
    { value: '0', checked: true, text: '男' },
    { value: '1', checked: false, text: '女' }
  ];

  @observable sex: number = 0;
  @observable isShowSexModal: boolean = false;

  constructor(props: IProps) {
    this.userStore = props.user;
    if (props.user.info.sex) {
      this.sexData[0].checked = false;
      this.sexData[1].checked = true;
    } else {
      this.sexData[0].checked = true;
      this.sexData[1].checked = false;
    }
  }

  @action
  setIsShowSexModal = (value: boolean) => {
    this.isShowSexModal = value;
  }

  @action
  setSex = (index: number) => {
    this.sex = Number(this.sexData[index].value);
  }

  @action
  setInfo = (field: string, value: any) => {
    Taro.cloud
      .callFunction({
        name: 'updateUserInfo',
        data: {
          id: this.userStore.info.id,
          field,
          value
        }
      })
      .then(res => {
        console.log(res);
        this.userStore.setInfo(field, value);
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export default Store;
