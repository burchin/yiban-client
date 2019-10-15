import Taro from '@tarojs/taro';

class DBHelper {
  static db: any = Taro.cloud.database();
}

export default DBHelper;
