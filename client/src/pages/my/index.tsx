import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'


type PageStateProps = {
  counterStore: {
    counter: number,
    increment: Function,
    decrement: Function,
    incrementAsync: Function
  }
}

interface My {
  props: PageStateProps;
}

@inject('counterStore')
@observer
class My extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  render () {
    return (
      <View className='index'>
        <Text>My</Text>
      </View>
    )
  }
}

export default My  as ComponentType
