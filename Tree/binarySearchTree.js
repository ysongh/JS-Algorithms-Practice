class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    
    // add a new node into the tree
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
    
    // search for a node in the tree
    find(value){
        if(this.root === null){
            return false;
        }
        else{
            let current = this.root;
            let found = false;
            while(!found){
                if(value === current.value){
                    return true;
                }
                else if(value > current.value){
                    if(current.right === null){
                        return false;
                    }
                    else{
                        current = current.right;
                    }
                }
                else{
                    if(current.left === null){
                        return false;
                    }
                    else{
                        current = current.left;
                    }
                }
            }
        }
    }
}

const bst = new BinarySearchTree();
console.log(bst);