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
    
    // add connection between vertices
    addEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    
    //remove an edge from adjacencyList
    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            vertex => vertex !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            vertex => vertex !== vertex1
        );
    }
    
    //remove a vertex from adjacencyList
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacencyVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacencyVertex);
        }
        delete this.adjacencyList[vertex];
    }
}

const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
console.log(g);