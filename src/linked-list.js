const Node = require('./node');

class LinkedList {

    constructor() {
        this._head = null;
        this._tail = null;
        this._length = 0;
    }

    append(data) {
        let tail = this._tail;
        let newNode = new Node(data, tail, null);
        this._tail = newNode;
        if (tail === null){
            this._head = newNode;
            this._tail = newNode;
        } else {
            tail.next = newNode;
        }
        this._length++;
    }

    head() {
        if (this._head !== null){
            return this._head.data;
        }else{
            return null;
        }
    }

    tail() {
        if (this._tail !== null){
            return this._tail.data;
        } else {
            return null;
        }
    }

    at(index){
        return this.getNodeAt(index).data;
    }

    getNodeAt(index){
        let node = undefined;
        if (this.isElementIndex(index)) {
            if (index < this._length << 1) {
                node = this._head;
                for (let i = 0; i < index; i++) {
                    node = node.next;
                }
            } else {
                node = this._tail;
                for (let i = this._length - 1; i > index; i--) {
                    node = node.prev;
                }
            }
        }
        return node;
    }

    insertAt(index, data) {
        if (index === this._length){
            this.append(data);
        } else if (index === 0){
            let head = this._head;
            let newNode = new Node(data, null, head);
            this._head = newNode;
            if (head === null){
                this._head = newNode;
                this._tail = newNode;
            } else {
                head.prev = newNode;
            }
            this._length++;
        } else {
            let subhead = this.getNodeAt(index);
            let subtail = subhead.prev;
            let newNode = new Node(data,subtail,subhead);
            subtail.next = newNode;
            subhead.prev = newNode;
            this._length++;
        }
    }

    isEmpty() {
        return this._length === 0 && this._head === null && this._tail === null;
    }

    clear() {
        this._head.cleanForward();
        console.log(this._head);
        console.log(this._tail);
        this._head = null;
        this._tail = null;
        this._length = 0;
    }

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}

    isElementIndex(index) {
        return index >= 0 && index < this._length;
    }
}


