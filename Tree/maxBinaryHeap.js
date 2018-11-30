class MaxBinaryHeap{
    constructor(){
        this.values = [];
    }
    
    // add a value to the end of the array
    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }
    
    // move the value up if the child value is greater than it parent value.
    bubbleUp(){
        let index = this.values.length - 1;
        const element = this.values[index];
        
        while(index > 0){
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            if(element <= parent){
                break;
            }
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }
    
    // remove the root and replace it with the last node or element.
    extractMax(){
        const oldRoot = this.values[0];
        const lastNode = this.values.pop();
        
        if(this.values.length > 0){
            this.values[0] = lastNode;
            this.bubbleDown();
        }
        
        return oldRoot;
    }
    
    // move the value down if the parent value is less than it child value.
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
                if(leftChild > this.values[parentIndex]){
                    swap = leftChildIndex;
                }
            }
            
            if(rightChildIndex < len){
                rightChild = this.values[rightChildIndex];
                if((swap === null && rightChild > this.values[parentIndex]) ||
                    (swap !== null && rightChild > leftChild)){
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

let heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(45);
heap.insert(23);
heap.insert(17);
heap.insert(67);
console.log(heap.values);