import { observable, action } from 'mobx';

class Store {
  @observable modalVisable: boolean = false;

  @action
  setModalVisable = (value:boolean) => {
    this.modalVisable = value;
  };
}

export default Store;
