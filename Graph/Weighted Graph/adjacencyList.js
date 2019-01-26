class WeightedGraph{
    constructor(){
        this.adjacencyList = {};
    }
    
    // add a vertex to adjacencyList
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        }
    }
    
    // add a edge between two vertexs with weight to adjacencyList
    addEdge(vertex1, vertex2, weight){
        this.adjacencyList[vertex1].push({node: vertex2, weight: weight});
        this.adjacencyList[vertex2].push({node: vertex1, weight: weight});
    }
}

const g = new WeightedGraph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
console.log(g);