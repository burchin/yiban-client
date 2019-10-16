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

class Schedule {
    // ID
    id: string;
    // 课程ID
    courseId: string;
    // 日期
    date: string;
    // 开始时间
    beginTime: string;
    // 结束时间
    endTime: string;
    // 开发预约时间
    openTime: number = 24;
    // 价格
    money: number = 100;
    // 经验值
    experience: number = 0;
    // 是否逻辑删除
    isDelete: boolean = false;
}

type CourseDetail = {
    id: number;
    title: string;
    beginTime: string;
    endTime: string;
    address: string;
    person: number;
    money: number;
    status: number;
    detail: string;
}

export { Course, Schedule, CourseDetail};