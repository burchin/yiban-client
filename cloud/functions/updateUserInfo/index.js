const cloud = require("wx-server-sdk");
cloud.init({
  env: "yiban-client"
});

exports.main = async (event, context) => {
  const db = cloud.database();

  let data = {};
  data[event.field] = event.value;
  try {
    return await db
      .collection("user")
      .doc(event.id)
      .update({
        data
      });
  } catch (e) {
    console.error(e);
  }
};
