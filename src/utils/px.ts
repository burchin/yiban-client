import Taro from '@tarojs/taro';

const Px = {
    toRpx: (value: number) => {
        const { pixelRatio } = Taro.getSystemInfoSync();
        return value / pixelRatio;
    }
}

export default Px;