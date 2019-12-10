class User {
  // 性别枚举
  static Sex: object = { Male: 0, Female: 1 };

  // id
  id: string = '';
  // openId
  openId: string = '';
  // 姓名
  name: string = '';
  // 性别 0:男 1:女
  sex: number = 0;
  // 年龄
  age: number = 1;
  // 联系电话
  tel: string = '';
  // 生日
  birthday: string = '2000-01-01';
  // 学校
  school: string = '';
  // 加入时间
  joinTime: string = '';
  // 剩余金币
  money: number = 0;
  // 优惠券
  coupon: number = 0;
  // 经验值
  experience: number = 0;
}

export { User };
