import Taro from '@tarojs/taro';
import { observable, action } from 'mobx';

class Store {
  @observable banner: string = '';
  @observable content: string[] = [];

  @action
  getIntro = () => {
    const db = Taro.cloud.database();
    db.collection('introduction').get({
      success: res => {
        if (res.data.length > 0) {
          const intro = res.data[0];
          this.banner = intro.banner;
          this.content = intro.content;
        }
      }
    });
  };
}

export default Store;
