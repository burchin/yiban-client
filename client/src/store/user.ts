import { observable, action } from 'mobx'

class User {
    @observable openId: string = '111';
    @observable unionId: string = '';

    constructor() {

    }
}

export default User;