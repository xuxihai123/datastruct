import LinkedList from '../linked-list/LinkedList';
/**
 * 链表实现的栈
 */
export default class Stack {
  constructor() {
    this.linkedList = new LinkedList();
  }
  push(element) {
    this.linkedList.prepend(element);
  }
  pop() {
    const head = this.linkedList.deleteHead();
    // return tail;
    return head && head.value;
  }

  peek() {
    const head = this.linkedList.head;
    return head && head.value;
  }

  isEmpty() {
    return this.linkedList.getSize() === 0;
  }

  toString(callback) {
    var arr = this.toArray();
    if (!callback) {
      callback = (p) => p;
    }

    return arr.map((p) => callback(p)).join(',');
  }
  toArray() {
    // const arr = this.linkedList.toArray();
    // // console.log(arr);
    // let left = 0;
    // let right = arr.length - 1;
    // let temp;
    // while (left < right) {
    //   temp = arr[left];
    //   arr[left] = arr[right];
    //   arr[right] = temp;
    //   left++;
    //   right--;
    // }
    // // console.log(arr);
    // return arr;
    return this.linkedList.toArray();
  }
}
