// This is undirected graph
class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    
    // add a vertex to adjacencyList
    addVertex(vertex){
        // check if the vertex exist
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        }
    }
}

const g = new Graph();
console.log(g);