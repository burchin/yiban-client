import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import './style.scss';

type Props = {
  data: any;
};

interface CourseCard {
  props: Props;
}

class CourseCard extends Component {
  render() {
    return (
      <View className="box">
        <Text>{this.props.data.title}</Text>
        <Text>{this.props.data.beginTime}</Text>
        <Text>{this.props.data.address}</Text>
        <View>
            <Text>{this.props.data.money}</Text>
            <Text>{this.props.data.status}</Text>
        </View>
      </View>
    );
  }
}

export default CourseCard;
