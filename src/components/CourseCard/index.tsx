import Taro, { Component } from '@tarojs/taro';
import { observer } from '@tarojs/mobx';
import { Image, View, Text } from '@tarojs/components';
import { AtButton, AtModal } from 'taro-ui';
import { Course } from '../../model';
import Store from './store';
import './style.scss';

import picTime from './images/time.png';
import picAddress from './images/address.png';
import picMoney from './images/money.png';

type Props = {
  data: Course;
  style?: string;
};

interface CourseCard {
  props: Props;
}

@observer
class CourseCard extends Component {
  store = new Store();

  onDetail = e => {
    if (e.target.id == 'order') {
      return;
    }
    Taro.navigateTo({ url: './detail' });
  };

  onOrder = () => {
    this.store.setModalVisable(true);
  };

  onCloseModal = () => {
    this.store.setModalVisable(false);
  };

  render() {
    const { modalVisable } = this.store;

    return (
      <View>
        <View
          className="box"
          style={this.props.style}
          onClick={this.onDetail}
        >
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
            <View className="money">
              <Image mode="widthFix" src={picMoney} />
              <Text>{this.props.data.money}</Text>
            </View>
            {/* <Text>{this.props.data.status}</Text> */}
            <AtButton
              id="order"
              type="primary"
              size="small"
              onClick={this.onOrder.bind(this)}
            >
              预约
            </AtButton>
          </View>
        </View>
        <AtModal
          isOpened={modalVisable}
          closeOnClickOverlay={false}
          onClose={this.onCloseModal}
          onCancel={this.onCloseModal}
          onConfirm={this.onCloseModal}
          title="提示框"
          cancelText="取消"
          confirmText="确认"
          content="确定预约吗？"
        />
      </View>
    );
  }
}

export default CourseCard;
