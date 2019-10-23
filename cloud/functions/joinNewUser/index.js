const cloud = require("wx-server-sdk");
cloud.init({
  env: "yiban-client"
});

Date.prototype.format = function(fmt) {
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "H+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    S: this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(
      RegExp.$1,
      (this.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
  return fmt;
};

exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext();
  const db = cloud.database();
  const data = {
    openId: wxContext.OPENID,
    sex: 0,
    age: 1,
    money: 0,
    coupon: 0,
    experience: 0,
    joinTime: new Date().format("yyyy-MM-dd HH:mm:ss")
  };
  try {
    // join
    let res = await db.collection("user").add({ data });
    if (res._id && res._id != "") {
      return {
        id: res._id,
        openId: data.openId,
        name: '',
        sex: data.sex,
        age: data.age,
        tel: '',
        birthday: '2000-01-01',
        school: '',
        joinTime: data.joinTime,
        money: data.money,
        coupon: data.coupon,
        experience: data.experience
      };
    } else {
      return {
        openId: wxContext.OPENID
      };
    }
  } catch (e) {
    console.error(e);
  }
};
