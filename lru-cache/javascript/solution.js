/**
 * @param {number} capacity
 */
class Node {
  constructor(key, val) {
    this.key = key;
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = {};
    this.left = new Node(0, 0);
    this.right = new Node(0, 0);
    this.length = 0;
    this.left.next = this.right;
    this.right.prev = this.left;
  }

  remove(node) {
    let prev = node.prev;
    let next = node.next;
    prev.next = next;
    next.prev = prev;
  }

  insert(node) {
    let prev = this.right.prev;
    let next = this.right;
    prev.next = node;
    next.prev = node;
    node.next = next;
    node.prev = prev;
  }

  get(key) {
    if (this.cache[key] !== undefined) {
      this.remove(this.cache[key]);
      this.insert(this.cache[key]);
      return this.cache[key].value;
    }
    return -1;
  }

  put(key, value) {
    if (this.cache[key] !== undefined) {
      this.remove(this.cache[key]);
      this.length--;
    }

    this.cache[key] = new Node(key, value);
    this.insert(this.cache[key]);
    this.length++;

    if (this.length > this.capacity) {
      let lru = this.left.next;

      this.remove(lru);
      delete this.cache[lru.key];
      this.length--;
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
