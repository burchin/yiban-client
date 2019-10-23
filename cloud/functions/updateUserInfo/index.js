const cloud = require("wx-server-sdk");
cloud.init({
  env: "yiban-client"
});

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext();
  const db = cloud.database();
  const cmd = db.command;

  const user = await db
    .collection("user")
    .where({
      openId: cmd.eq(wxContext.OPENID)
    })
    .get();

  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID
  };
};
