import { ComponentType } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { observer, inject } from '@tarojs/mobx';
import { CourseCard } from '../../components';
import Store from './store';

type PageStateProps = {
  counterStore: {
    counter: number;
    increment: Function;
    decrement: Function;
    incrementAsync: Function;
  };
};

interface Course {
  props: PageStateProps;
}

@inject('counterStore')
@observer
class Course extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: 'BBB',
    usingComponents: {
      CourseCard: '../../components/CourseCard/index'
    }
  };

  store = new Store();

  componentWillMount() {}

  render() {
    return (
      <View className="index">
        {this.store.list.map(item => (
          <CourseCard data={item} />
        ))}
      </View>
    );
  }
}

export default Course as ComponentType;
