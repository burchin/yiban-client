import Taro from '@tarojs/taro';

const UIHelper = {
  toRpx: (value: number) => {
    const { pixelRatio } = Taro.getSystemInfoSync();
    return value / pixelRatio;
  },
  showToast: (title: string, isSuccess: boolean = true) => {
    Taro.showToast({
      title: title,
      icon: isSuccess ? 'success' : 'none',
      duration: 2000
    });
  }
};

export default UIHelper;
