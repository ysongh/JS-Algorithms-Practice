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
    
    // using iterative
    bfsIterative(vertex){
        const queue = [vertex];
        const list = [];
        const visited = {};
        visited[vertex] = true;
        
        while(queue.length > 0){
            let removedVertex = queue.shift();
            list.push(removedVertex);
            
            this.adjacencyList[removedVertex].forEach(adjacent  => {
                if(!visited[adjacent]){
                    visited[adjacent] = true;
                    queue.push(adjacent);
                }
            });
        }
        return list;
    }
}

const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "C");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g);