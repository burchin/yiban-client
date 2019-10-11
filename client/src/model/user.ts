enum Sex { Male, Female }

type User = {
    // 用户ID
    id: string;
    // 姓名
    name: string;
    // 性别
    sex: Sex;
    // 年龄
    age: number;
    // 联系电话
    tel: string;
    // 生日
    birthday: string;
    // 学校
    school: string;
    // 加入时间
    join: string;
    // 剩余金币
    coin: number;
}

export { Sex, User };