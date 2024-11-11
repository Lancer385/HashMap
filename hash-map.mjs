import { Node } from "./node.mjs";

export class HashMap{
    constructor(){
        this.buckets = new Array(16);
        this.size = 0;
    }
    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
      
        for (let i = 0; i < key.length; i++) {
          hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % (this.buckets.length);
        }
        console.log(`Hash for key '${key}': ${hashCode}`);  // <-- debug line!
        return hashCode;
    }
    set(key, value){
        const node = new Node(key, value);
        const hashCode = this.hash(key);
        if (this.buckets[hashCode] === undefined){
            this.buckets[hashCode] = node;
            this.size++;
            return;
        }
        if (this.buckets[hashCode].key === node.key){
            this.buckets[hashCode].value = node.value;
            this.size++;
            return;
        }
        let temp = this.buckets[hashCode];
        while (temp.next !== null){
            temp = temp.next;
        }
        temp.next = node;
        this.size++;
        return;
    };
    
};