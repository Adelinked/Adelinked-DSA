function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function (element) {
    this.element = element;
    this.next = null;
  };

  this.head = function () {
    return head;
  };

  this.size = function () {
    return length;
  };

  this.add = function (element) {
    // Only change code below this line
    const node = new Node(element);
    if (length == 0) head = node;
    else {
      let tmp = head;
      for (let i = 1; i < length; i++) {
        tmp = tmp.next;
      }
      tmp.next = node;
    }
    length = length + 1;
    // Only change code above this line
  };
  this.remove = function (element) {
    if (head.element === element) {
      head = head.next;
      length--;
    } else {
      let tmp = head;
      let prec;
      while (tmp.element !== element && tmp.next !== null) {
        prec = tmp;
        tmp = tmp.next;
      }
      if (tmp.element === element) {
        prec.next = tmp.next;
        tmp = null;
        length--;
      }
    }
  };
  this.isEmpty = function () {
    return head === null;
  };
  this.indexOf = function (element) {
    let tmp = head;
    let index = 0;
    while (tmp.element !== element && tmp.next !== null) {
      tmp = tmp.next;
      index++;
    }
    if (tmp.element === element) {
      return index;
    }
    return -1;
  };
  this.elementAt = function (index) {
    if (index < 0 || index >= this.size()) return undefined;
    let tmp = head;
    for (let i = 0; i < index; i++) {
      tmp = tmp.next;
    }
    return tmp.element;
  };
  this.removeAt2 = function (index) {
    if (index < 0 || index >= this.size()) return null;
    const n = this.elementAt(index);
    this.remove(n);
    return n;
  };

  this.removeAt = function (index) {
    if (index < 0 || index >= this.size()) return null;

    if (index == 0) {
      const headElt = head.element;
      head = length === 1 ? null : head.next;
      length--;
      return headElt;
    } else {
      let tmp = head;
      let prec;
      for (let i = 0; i < index; i++) {
        prec = tmp;
        tmp = tmp.next;
      }
      prec.next = tmp.next;
      length--;
      return tmp.element;
    }
  };
  this.addAt = function (index, element) {
    if (index < 0 || index > this.size()) return false;
    const node = new Node(element);
    if (length == 0) head = node;
    else {
      if (index == 0) {
        let saveHead = head;
        head = node;
        head.next = saveHead;
      } else {
        let tmp = head;
        // let prec;
        for (let i = 0; i < index; i++) {
          prec = tmp;
          tmp = tmp.next;
        }
        prec.next = node;
        node.next = tmp;
      }
    }
    length++;
  };
}

var test = new LinkedList();
test.add("cat");
test.add("dog");
/*test.add("fish");*/
test.addAt(2, "shark");
test.remove("dog");
console.log(test.head());
console.log(test.head().next);
console.log(test.head().next.next);