class PriorityQueue{
    constructor(){
        this.list = [];
    }
    
    enqueue(value, priority){
        this.list.push({value, priority});
        this.sort();
    }
    
    dequeue(){
        this.list.shift();
    }
    
    sort(){
        this.list.sort((x, y) => x.priority - y.priority);
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