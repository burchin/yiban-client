const cloud = require("wx-server-sdk");
cloud.init({
  env: "yiban-client"
});

// 获取用户信息
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext();

  const db = cloud.database();
  const cmd = db.command;
  const user = await db
    .collection("user")
    .where({
      openId: cmd.eq(event.id || wxContext.OPENID)
    })
    .get();

  let result = null;
  if (user.data.length > 0) {
    const data = user.data;
    result = {
      id: data._id,
      openId: data.openId,
      name: data.name || '',
      sex: data.sex || 0,
      age: data.sex || 1,
      tel: data.tel || '',
      birthday: data.birthday || '2000-01-01',
      school: data.school || '',
      joinTime: data.joinTime,
      money: data.money || 0,
      coupon: data.coupon || 0,
      experience: data.experience || 0
    };
  } else {
    result = {
      openId: wxContext.OPENID
    };
  }

  return result;
};
