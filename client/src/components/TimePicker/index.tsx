import Taro, { Component } from '@tarojs/taro';
import { View, Picker, Text } from '@tarojs/components';
import './style.scss';

type Props = {
  name: string;
  title: string;
  value: string;
  onChange: Function;
};

interface TimePicker {
  props: Props;
}

class TimePicker extends Component {
  onChange = e => {
    this.props.onChange(this.props.name, e.detail.value);
  };

  render() {
    return (
      <Picker mode="time" value={this.props.value} onChange={this.onChange}>
        <View className="formItem">
          <Text>{this.props.title}</Text>
          <Text className="value">{this.props.value == '' ? '请选择' : this.props.value}</Text>
        </View>
      </Picker>
    );
  }
}

export default TimePicker;
