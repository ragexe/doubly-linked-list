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
}


module.exports = Node;
