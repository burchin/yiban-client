import Taro, { Component } from '@tarojs/taro';
import { Image, View, Text } from '@tarojs/components';
import { Course } from '../../model';
import './style.scss';

import picTime from './images/time.png';
import picAddress from './images/address.png';

type Props = {
  data: Course;
  style?: string;
};

interface CourseCard {
  props: Props;
}

class CourseCard extends Component {
  render() {
    return (
      <View className="box" style={this.props.style}>
        <Text className="title">{this.props.data.title}</Text>
        <View className="tip">
          <Image mode="widthFix" src={picTime} />
          <Text>{`${this.props.data.beginTime} - ${this.props.data.endTime}`}</Text>
        </View>
        <View className="tip">
          <Image mode="widthFix" src={picAddress} />
          <Text>{this.props.data.address}</Text>
        </View>
        <View className="line"></View>
        <View className="content">
          <Text>{this.props.data.money}</Text>
          <Text>{this.props.data.status}</Text>
        </View>
      </View>
    );
  }
}

export default CourseCard;
