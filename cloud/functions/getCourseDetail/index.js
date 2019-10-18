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

  if (schedule != null) {
    const course = await db.collection('course').doc(schedule.courseId).get();

    let detail = {
      ...course,
      scheduleId: schedule.id,
      beginTime: `${schedule.date} ${schedule.beginTime}`,
      endTime: `${schedule.date} ${schedule.endTime}`,
      openTime: schedule.openTime,
      money: schedule.money,
      experience: schedule.experience
    };

    delete detail.isDelete;
    return detail;
  }
  
  return null;
};
