type Course = {
    // 课程ID
    id: number;
    // 标题
    title: string;
    // 开始时间（没有日期）
    beginTime: string;
    // 结束时间（没有日期）
    endTime: string;
    // 开发预约时间（没有日期）
    openTime: number;
    // 地址
    address: string;
    // 金币价格
    money: number;
    // 是否可用优惠券
    useCoupon: number;
    // 经验值
    experience: number;
    // 是否逻辑删除
    isDelete: number;
    // 详情
    description: string;
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