// 云函数入口文件
const cloud = require("wx-server-sdk");

cloud.init({
  env: "yiban-client"
});

Date.prototype.format = function (fmt) {
  var o = {
      "M+": this.getMonth() + 1, //月份 
      "d+": this.getDate(), //日 
      "H+": this.getHours(), //小时 
      "m+": this.getMinutes(), //分 
      "s+": this.getSeconds(), //秒 
      "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
      "S": this.getMilliseconds() //毫秒 
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
  if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

// 云函数入口函数
exports.main = async (event, context) => {
  const today = new Date().format('yyyy-MM-dd');
  console.log(today);
  const db = cloud.database();
  const cmd = db.command;
  let list = [];

  let schedules = await db
    .collection("schedule")
    .where({
      date: cmd.gte(today)
    })
    .get();

  if (schedules.data != null) {
    schedules = schedules.data;
    const ids = [];
    for (let i = 0; i < schedules.length; i++) {
      ids.push(schedules[i].courseId);
    }

    const course = await db
      .collection("course")
      .where({
        _id: cmd.in(ids)
      })
      .get();

    if (course.data != null) {
      for (let i = 0; i < schedules.length; i++) {
        const s = schedules[i];
        const c = course.data.find(v => v._id == schedules[i].courseId);

        let item = {
          id: s._id,
          title: c.title,
          address: c.address,
          beginTime: `${s.date} ${s.beginTime}`,
          endTime: `${s.date} ${s.endTime}`,
          money: s.money
        };

        list.push(item);
      }
    }
  }

  return list;
};
