// Note - this class only works on string
class HashTable{
    constructor(size=57){
        this.keyMap = new Array(size);
    }
    
    _hash(key){
        let total = 0;
        let primeNumber = 31;
        for(let i = 0; i < Math.min(key.length, 100); i++){
            let char = key[i];
            let value = char.charCodeAt(0);
            total = (total * primeNumber + value) % this.keyMap.length;
        }
        return total;
    }
    
    set(key, value){
        let index = this._hash(key);
        if(!this.keyMap[index]){
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
        return index;
    }
}

let ht = new HashTable();
console.log(ht.set("cools", "tree"));
console.log(ht.set("test", "plan"));
console.log(ht.set("candy", "chips"));