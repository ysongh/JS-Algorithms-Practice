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
}

let heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(45);
heap.insert(23);
heap.insert(17);
heap.insert(67);
console.log(heap.values);