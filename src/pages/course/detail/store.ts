import { observable, action } from 'mobx';
import { CourseDetail } from '../../../model';

class Store {
    @observable course:CourseDetail;

    @action
    getDetail = (id: number) => {
        this.course = {
            id: id,
            title: 'aaa',
            beginTime: '2019-10-11 09:00:00',
            endTime: '2019-10-11 10:00:00',
            address: 'test',
            person: 10,
            money: 100,
            status: 1,
            detail: '<div>test</div><br/><h2>haha</h2>'
        };
    };
}

export default Store;