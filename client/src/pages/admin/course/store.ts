import Taro from '@tarojs/taro';
import { observable, action } from 'mobx';
import { DBHelper } from '../../../utils';

class Store {
  // 名称
  @observable title: string = '';
  // 开始时间
  @observable beginTime: string = '';
  // 结束时间
  @observable endTime: string = '';
  // 开放预约
  @observable openTime: number = 24;
  // 地址
  @observable address: string = '福州某某某路111号某某某11号楼1101室';
  // 价格
  @observable money: number = 0;
  // 优惠券是否可用
  @observable useCoupon: number = 0;
  // 经验值
  @observable experience: number = 0;
  // 描述
  @observable description: string = '';

  @action
  setValue = (key: string, value: any) => {
    this[key] = value;
  };

  @action
  add = () => {
    const {
      title,
      beginTime,
      endTime,
      openTime,
      address,
      money,
      experience,
      useCoupon,
      description
    } = this;

    DBHelper.db.collection('course').add({
      data: {
        title,
        beginTime,
        endTime,
        openTime,
        address,
        money,
        experience,
        useCoupon,
        description
      },
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
