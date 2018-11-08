// Write a singly linked lists

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    // Add new value at the end of the singly linked list
    push(val){
        let newNode = new Node(val);
        
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        
        this.length++;
        return this;
    }
    // Remove the last node or value of the singly linked list
    pop(){
        if(this.head === null){
            return undefined;
        }
        let current = this.head;
        let temp = current;
        
        while(current.next){
            // this node is before current
            temp = current;
            // move current to next node
            current = current.next;
        }
        this.tail = temp;
        // remove the pointer
        this.tail.next = null;
        this.length--;
        
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        
        return current;
    }
    
    // Get all the values of each node.
    traverse(){
        let current = this.head;
        while(current){
            console.log(current.val);
            current = current.next;
        }
    }
    
    // Remove the first node and set the head to the next node.
    shift(){
        if(this.head === null){
            return undefined;
        }
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        
        
        return currentHead;
    }
    
    // Add new node to the beginning of the list.
    unshift(val){
        let newNode = new Node(val);
        
        if(this.head === null){
            this.head = newNode;
            this.tail = this.head;
        }
        else{
            newNode.next = this.head;
            this.head = newNode;
        }
        
        this.length++;
        
        // return the whole list
        return this;
    }
    
    // Get the node based on target index
    getByIndex(index){
        if(index < 0 || index >= this.length){
            return null;
        }
        let current = this.head;
        let count = 0;
        while(count <= index){
            current = current.next;
            count++;
        }
        return current;
    }
    
    // Change the node value based on target index
    setByIndex(index, val){
        let foundNode = this.getByIndex(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }
}

var list = new SinglyLinkedList();
console.log(list);