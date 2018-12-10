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
    
    get(key){
        let index = this._hash(key);
        if(this.keyMap[index]){
            for(let i = 0; i < this.keyMap[index].length; i++){
                if(this.keyMap[index][i][0] === key){
                    return this.keyMap[index][i][1];
                }
            }
        }
        return undefined;
    }
    
    // get all the values
    values(){
        let valuesArr = [];
        for(let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let k = 0; k < this.keyMap[i].length; k++){
                    if(!valuesArr.includes(this.keyMap[i][k][1])){
                        valuesArr.push(this.keyMap[i][k][1]);
                    }
                }
            }
        }
        return  valuesArr;
    }
}

let ht = new HashTable();
console.log(ht.set("cools", "tree"));
console.log(ht.set("test", "plan"));
console.log(ht.set("candy", "chips"));