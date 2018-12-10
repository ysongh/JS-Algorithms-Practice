// Note - this class only works on string
class HashTable{
    constructor(size=53){
        this.keyMap = new Array(size);
    }
    
    _hash(key){
        let total = 0;
        let primeNumber = 31;
        for(let i = 0; i < Math.min(key.length, 100); i++){
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * primeNumber + value) % this.keyMap.length;
        }
        return total;
    }
}