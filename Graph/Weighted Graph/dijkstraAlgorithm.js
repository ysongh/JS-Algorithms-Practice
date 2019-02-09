class PriorityQueue{
    constructor(){
        this.list = [];
    }
    
    enqueue(value, priority){
        this.list.push({value, priority});
    }
    
    dequeue(){
        this.list.shift();
    }
    
}

class WeightedGraph{
    constructor(){
        this.adjacencyList = {};
    }
    
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        }
    }
    
    addEdge(vertex1, vertex2, weight){
        this.adjacencyList[vertex1].push({node: vertex2, weight: weight});
        this.adjacencyList[vertex2].push({node: vertex1, weight: weight});
    }
}