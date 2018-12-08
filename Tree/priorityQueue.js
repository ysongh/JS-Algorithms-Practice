class Node{
    constructor(value, priority){
        this.value = value;
        this.priority = priority;
    }
}

// Min Binary Heap
class PriorityQueue{
    constructor(){
        this.values = [];
    }
    
    // add a new node and place it based on its priority.
    enqueue(value, priority){
        let newNode = new Node(value, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    
    bubbleUp(){
        let index = this.values.length - 1;
        const element = this.values[index];
        while(index > 0){
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            if(element.priority >= parent.priority){
                break;
            }
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parent[index];
        }
    }
    
    // remove root element and rearranges heap using priority
    dequeue(){
        const oldRoot = this.values[0];
        const lastNode = this.values.pop();
        
        if(this.values.length > 0){
            this.values[0] = lastNode;
            this.bubbleDown();
        }
        
        return oldRoot;
    }
    
    bubbleDown(){
        let parentIndex = 0;
        let parentValue = this.values[0];
        const len = this.values.length;
        
        while(true){
            let leftChildIndex = 2 * parentIndex + 1;
            let rightChildIndex = 2 * parentIndex + 2;
            let leftChild;
            let rightChild;
            let swap = null;
            
            if(leftChildIndex < len){
                leftChild = this.values[leftChildIndex];
                if(leftChild.priority < parentValue.priority){
                    swap = leftChildIndex;
                }
            }
            
            if(rightChildIndex < len){
                rightChild = this.values[rightChildIndex];
                if((swap === null && rightChild.priority < parentValue.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)){
                    swap = rightChildIndex;
                }
            }
            
            if(swap === null){
                break;
            }
            
            this.values[parentIndex] = this.values[swap];
            this.values[swap] = parentValue;
            parentIndex = swap;
        }
    }
}

let shop = new PriorityQueue();
shop.enqueue("Buy food", 2);
shop.enqueue("Buy water", 1);
shop.enqueue("Buy toys", 7);
shop.enqueue("Buy paper", 6);
shop.enqueue("Buy plates", 5);
console.log(shop.values);