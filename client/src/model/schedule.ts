// 排课
class Schedule {
    // ID
    id: string;
    // 课程ID
    courseId: string;
    // 日期
    date: string;
    // 开始时间
    beginTime: string = '';
    // 结束时间
    endTime: string = '';
    // 开发预约时间
    openTime: number = 24;
    // 价格
    money: number = 100;
    // 经验值
    experience: number = 0;
    // 是否逻辑删除
    isDelete: boolean = false;
}

// 排课列表
class ScheduleListItem {
    // schedule id
    id: string;
    title: string;
    address: string;
    beginTime: string = '';
    endTime: string = '';
    money: number = 0;
}

export { Schedule, ScheduleListItem };