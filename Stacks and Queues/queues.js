class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    
    // Add a new node at end of the queue
    enqueue(val){
        let newNode = new Node(val);
        if(this.first === null){
            this.first = newNode;
            this.last = newNode;
        }
        else{
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
        return this.size;
    }
}


let list = new Queue();
console.log(list);