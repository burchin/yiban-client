// 云函数入口文件
const cloud = require("wx-server-sdk");

cloud.init({
  env: "yiban-client"
});

// 云函数入口函数
exports.main = async (event, context) => {
  const id = event.id;
  const db = cloud.database()
  const schedule = await db.collection('schedule').doc(id).get();
  let detail = null;

  if (schedule.data != null) {
    const s = schedule.data;
    const course = await db.collection('course').doc(s.courseId).get();

    if (course.data != null) {
      detail = {
        ...course.data,
        scheduleId: s._id,
        beginTime: `${s.date} ${s.beginTime}`,
        endTime: `${s.date} ${s.endTime}`,
        openTime: s.openTime,
        money: s.money,
        experience: s.experience
      };
  
      delete detail.isDelete;
    }
  }
  
  return detail;
};
