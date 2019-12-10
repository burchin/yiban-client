import Taro, { Component } from '@tarojs/taro';
import { View, Picker, Text, Image } from '@tarojs/components';
// import './style.scss';
import picArrow from '../../../assets/images/arrow.png';

type Props = {
  value: string;
  onChange: Function;
};

interface BirthDay {
  props: Props;
}

class BirthDay extends Component {
  onChange = e => {
    this.props.onChange(e.detail.value);
  };

  render() {
    return (
      <Picker mode="time" value={this.props.value} onChange={this.onChange}>
        <View className="box">
            <Text>生日</Text>
            <Text>{this.props.value}</Text>
            <Image className="arrow" src={picArrow} />
          </View>
      </Picker>
    );
  }
}

export default BirthDay;
