import { observable, computed, action} from 'mobx'
class Todo {
  @observable list = []
  @action add(text) {
    this.list.push(text)
  }
  @action remove(index) {
    this.list.splice(index, 1);
  }
}
export default new Todo()
