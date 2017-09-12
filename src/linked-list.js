const Node = require('./node');

class LinkedList {

    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        let tail = this._tail;
        let newNode = new Node(data, tail, null);
        this._tail = newNode;
        if (tail) {
            tail.next = newNode;
        } else {
            this._head = newNode;
            this._tail = newNode;
        }
        this.length++;
        return this;
    }

    head() {
        if (this._head) {
            return this._head.data;
        } else {
            return null;
        }
    }

    tail() {
        if (this._tail) {
            return this._tail.data;
        } else {
            return null;
        }
    }

    at(index) {
        return this.getNodeAt(index).data;
    }

    getNodeAt(index) {
        let node = undefined;
        if (this.isElementIndex(index)) {
            if (index < this.length << 1) {
                node = this._head;
                for (let i = 0; i < index; i++) {
                    node = node.next;
                }
            } else {
                node = this._tail;
                for (let i = this.length - 1; i > index; i--) {
                    node = node.prev;
                }
            }
        }
        return node;
    }

    insertAt(index, data) {
        if (index === this.length) {
            this.append(data);
        } else if (index === 0) {
            let head = this._head;
            let newNode = new Node(data, null, head);
            this._head = newNode;
            if (head) {
                head.prev = newNode;
            } else {
                this._head = newNode;
                this._tail = newNode;
            }
            this.length++;
        } else {
            let subhead = this.getNodeAt(index);
            let subtail = subhead.prev;
            let newNode = new Node(data, subtail, subhead);
            subtail.next = newNode;
            subhead.prev = newNode;
            this.length++;
        }
        return this;
    }

    isEmpty() {
        return this.length === 0 && this._head === null && this._tail === null;
    }

    clear() {
        for (let node = this._head; node !== null; node = node.next) {
            let prevNode = node.prev;
            if (prevNode){
                prevNode.next = null;
            }
            node.prev = null;
        }

        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;
    }

    detach(node) {
        let next = node.next;
        let prev = node.prev;

        if (prev) {
            prev.next = next;
            node.prev = null;
        } else {
            this._head = next;
        }

        if (next) {
            next.prev = prev;
            node.next = null;
        } else {
            this._tail = prev;
        }

        node = null;
        this.length--;
        return this;
    }

    deleteAt(index) {
        return this.detach(this.getNodeAt(index));
    }

    reverse() {
        for (let node = this._head; node !== null; node = node.prev) {
            let temp = node.next;
            node.next = node.prev;
            node.prev = temp;
        }

        let temp = this._head;
        this._head = this._tail;
        this._tail = temp;
        return this;
    }

    indexOf(data) {
        let index = 0;
        for (let i = this._head; i !== null; i = i.next) {
            if (i.data === data) {
                return index;
            }
            index++;
        }
        return -1;
    }

    isElementIndex(index) {
        return index >= 0 && index < this.length;
    }
}

module.exports = LinkedList;

