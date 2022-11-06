var Node = function (data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function () {
  this.head = null;
  this.tail = null;
  // Only change code below this line
  this.add = function (data) {
    let node = new Node(data, this.tail);
    if (this.head == null) {
      this.head = node;
    } else if (this.head.next == null) {
      this.head.next = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
  };
  this.remove = function (data) {
    let tmp = this.head;

    while (tmp !== null) {
      if (tmp.data === data) {
        if (tmp === this.head) {
          while (this.head.data === data) {
            if (this.head.next) {
              this.head = this.head.next;
              this.head.prev = null;
            } else {
              this.head = null;
              this.tail = null;
              return null;
            }
            tmp = tmp.next;
          }
        } else if (tmp === this.tail) {
          while (this.tail.data === data) {
            if (this.tail.prev) {
              this.tail = this.tail.prev;
              this.tail.next = null;
            } else {
              this.tail = null;
              this.head = null;
              return null;
            }
          }
        } else {
          tmp.prev.next = tmp.next;
          tmp.next.prev = tmp.prev;
        }
      }
      tmp = tmp.next;
    }
  };

  this.display = function () {
    console.log("head=", this.head);
    let tmp = this.head;
    while (tmp && tmp.next !== null && tmp.next !== this.tail) {
      tmp = tmp.next;
      console.log(tmp.data);
    }
    console.log("tail=", this.tail);
  };

  this.reverse = function () {
    if (this.head === null) return null;

    let tmpLeft = this.head;
    let tmpRight = this.tail;
    while (tmpLeft !== tmpRight) {
      const saveData = tmpRight.data;
      tmpRight.data = tmpLeft.data;
      tmpLeft.data = saveData;
      tmpLeft = tmpLeft.next;
      tmpRight = tmpRight.prev;
    }
  };
  // Only change code above this line
};
let test = new DoublyLinkedList();

test.add("car");

test.add("car");
test.add("car");
test.add("fish");
test.add("car");

//test.display();
test.reverse();
test.display();
