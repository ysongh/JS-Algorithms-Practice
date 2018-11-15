class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    
    // Add a new node at the beginning of the stack
    push(val){
        let newNode = new Node(val);
        if(this.size === 0){
            this.first = newNode;
            this.last = newNode;
        }
        else{
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        this.size++;
        return this.size;
    }
}

let list = new Stack();
console.log(list);