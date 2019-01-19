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
    // using recursion
    dfsRecurive(vertex){
       const list = [];
       const visited = {};
       const adjacencyList = this.adjacencyList;
       
       function scout(vertex){
           if(!vertex){
               return null;
           }
           visited[vertex] = true;
           list.push(vertex);
           
           for(let i of adjacencyList[vertex]){
               if(!visited[i]){
                   return scout(i);
               }
           }
       }
       scout(vertex);
       
       return list;
    }
    
    // using iterative
    dfsIterative(start){
        const queue = [start];
        const list = [];
        const visited = {};
        visited[start] = true;
        
        while(queue.length > 0){
            let vertex = queue.shift();
            list.push(vertex);
            
            this.adjacencyList[vertex].forEach(adjacent  => {
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