import { Node } from "./key-node.mjs";

export class HashSet{
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
      return hashCode;
    }
    set(key){
      if (this.size / this.buckets.length >= 0.75){
        this.resize();
      }
      const node = new Node(key);
      const hashCode = this.hash(key);
      if (this.buckets[hashCode] === undefined){
        this.buckets[hashCode] = node;
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
  resize(){
    let oldBucket = this.buckets;
    this.buckets = new Array((oldBucket.length * 2));
    this.size = 0;

    for (let i = 0; i < oldBucket.length; i++){
      if (oldBucket[i] !== undefined){
        this.set(oldBucket[i].key)
        if (oldBucket[i].next !== null){
          let temp = oldBucket[i];
          while (temp.next !== null){
            temp = temp.next;
            this.set(temp.key);
          }
        }
      }
    }
  }
  has(key){
    for (let i = 0; i < this.buckets.length; i++){
      if (this.buckets[i] !== undefined){
        if (this.buckets[i].key === key){
          return true;
        }
        if (this.buckets[i].next !== null){
          let temp = this.buckets[i];
          while(temp.next !== null){
            temp = temp.next;
            if (temp.key === key){
              return true;
            }
          }
        }
      }
    }
    return false;
  }
  remove(key){
    for (let i = 0; i < this.buckets.length; i++){
      if (this.buckets[i] !== undefined){
        if (this.buckets[i].key === key){
          if (this.buckets[i].next !== null){
            this.buckets[i] = this.buckets[i].next;
            return true;
          }
          delete this.buckets[i];
          this.size--;
          return true;
        }

        if (this.buckets[i].next !== null){
          let prev;
          let temp = this.buckets[i];
          while (temp.next !== null){
            prev = temp;
            temp = temp.next;
            if (temp.key === key){
                prev.next = temp.next;
                return true;
            }
          }
        }
      }
    }
    return false;
  }

  clear(){
    let length = this.buckets.length;
    this.buckets = new Array(length);
    this.size = 0;
  }

  keys(){
    let keyArray = [];
    for (let i = 0; i < this.buckets.length; i++){
      if (this.buckets[i] !== undefined){
        keyArray.push(this.buckets[i].key);
        if (this.buckets[i].next !== null){
          let temp = this.buckets[i];
          while (temp.next !== null){
            temp = temp.next;
            keyArray.push(temp.key);
          }
        }
      }
    }
    return keyArray;
  }
};