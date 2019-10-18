// 课程
class Course {
  // ID
  id: string;
  // 标题
  title: string;
  // 上限人数
  max: number = 10;
  // 地址
  address: string = '福州某某某路111号某某某11号楼1101室';
  // 金币价格
  money: number = 100;
  // 是否可用优惠券
  useCoupon: boolean = false;
  // 经验值
  experience: number = 0;
  // 详情
  description: string = '';
  // 是否逻辑删除
  isDelete: boolean = false;
}

// 课程详情
class CourseDetail {
  // ID
  id: string;
  // ID
  scheduleId: string;
  // 标题
  title: string;
  // 上限人数
  max: number = 10;
  // 地址
  address: string = '福州某某某路111号某某某11号楼1101室';
  // 开始时间 + 日期
  beginTime: string = '';
  // 结束时间 + 日期
  endTime: string = '';
  // 开发预约时间
  openTime: number = 24;
  // 价格
  money: number = 100;
  // 经验值
  experience: number = 0;
  // 是否可用优惠券
  useCoupon: boolean = false;
  // 详情
  description: string = '';
}

export { Course, CourseDetail };
