class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BreadthFirstSearch{
    constructor(){
        this.root = null;
    }
    
    insert(value){
        let newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        else{
            let current = this.root;
            while(true){
                if(value > current.value){
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    }
                    else{
                        current = current.right;
                    }
                }
                else if(value < current.value){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    }
                    else{
                        current = current.left;
                    }
                }
                else{
                    return undefined;
                }
            }
        }
    }
    
    // traversal the tree by visiting every node on the same level or moving horizontally.
    bfs(){
        let queue = [];
        let list = [];
        let node = this.root;
        
        queue.push(this.root);
        
        // queue alone would not work because it an array
        while(queue.length){
            node = queue.shift();
            list.push(node.value);
            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right);
            }
        }
        return list;
    }
}

const bfs = new BreadthFirstSearch();
bfs.insert(10);
bfs.insert(12);
bfs.insert(14);
bfs.insert(7);
bfs.insert(3);
bfs.insert(23);
bfs.insert(14);
console.log(bfs);