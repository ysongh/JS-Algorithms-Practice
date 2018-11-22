class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class DepthFirstSearch{
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
    
    // traversal the tree by visiting every node from top to bottom
    preOrder(){
        let list = [];
        let current = this.root;
        
        function traverse(current){
            list.push(current.value);
            if(current.left){
                traverse(current.left);
            }
            if(current.right){
                traverse(current.right);
            }
        }
        traverse(current);
        return list;
    }
    
    // traverse the tree by visiting every node from bottom to top
    postOrder(){
        let list = [];
        let current = this.root;
        
        function traverse(current){
            if(current.left){
                traverse(current.left);
            }
            if(current.right){
                traverse(current.right);
            }
            list.push(current.value);
        }
        traverse(current);
        return list;
    }
    
    // traverse the tree by visiting every node starting at bottom left to right
    inOrder(){
        let list = [];
        let current = this.root;
        
        function traverse(current){
            if(current.left){
                traverse(current.left);
            }
            
            list.push(current.value);
            
            if(current.right){
                traverse(current.right);
            }
        }
         traverse(current);
         return list;
    }
}

const dfs = new DepthFirstSearch();
dfs.insert(10);
dfs.insert(12);
dfs.insert(14);
dfs.insert(7);
dfs.insert(3);
dfs.insert(23);
dfs.insert(14);
console.log(dfs);