class Course {
    // 课程ID
    id: number;
    // 标题
    title: string;
    // 上限人数
    max: number = 10;
    // 地址
    address: string = '福州某某某路111号某某某11号楼1101室';
    // 金币价格
    money: number = 0;
    // 是否可用优惠券
    useCoupon: boolean = false;
    // 经验值
    experience: number;
    // 详情
    description: string;
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

export { Course, CourseDetail};