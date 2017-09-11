class Node {

    constructor(data = null, prev = null, next = null) {
        this.data = data;
        this.prev = prev;
        this.next = next;
    }

    cleanForward(){
        this.prev = null;
        if (this.next !== null){
            this.next.cleanForward();
            this.next = null;
        }
    }

    reverseForward(){
        let temp = this.prev;
        this.prev = this.next;
        this.next = temp;
        if (this.prev !== null){
            this.prev.reverseForward();
        }
    }
}


module.exports = Node;
