const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.currentNode = null;
  }

  root() {
    return this.currentNode;
  }


  add(data) {
    var newNode = new Node(data);
    if (this.currentNode === null) this.currentNode = newNode;
    else this.insertNode(this.currentNode, newNode);
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) node.left = newNode;
      else this.insertNode(node.left, newNode);
    }

    else {
      if (node.right === null) node.right = newNode;
      else this.insertNode(node.right, newNode);
    }
  }

  has(data) {
    if (this.currentNode === null) {
      return false;
    }
  
    function search(node, data) {
      if (node === null) {
        return false;
      } else if (data < node.data) {
        return search(node.left, data);
      } else if (data > node.data) {
        return search(node.right, data);
      } else {
        return true;
      }
    }
  
    return search(this.currentNode, data);
  }

  find(data) {
    if (this.currentNode === null) {
      return null;
    }
  
    function search(node, data) {
      if (node === null) {
        return null;
      } else if (data < node.data) {
        return search(node.left, data);
      } else if (data > node.data) {
        return search(node.right, data);
      } else {
        return node;
      }
    }
  
    return search(this.currentNode, data);
  }

  remove(data){
      this.currentNode = this.removeNode(this.currentNode, data);
  }
   
  removeNode(node, key)
  {
           

      if(node === null)
          return null;
   
      else if(key < node.data)
      {
          node.left = this.removeNode(node.left, key);
          return node;
      }
   

      else if(key > node.data)
      {
          node.right = this.removeNode(node.right, key);
          return node;
      }
   
      else
      {
          if(node.left === null && node.right === null)
          {
              node = null;
              return node;
          }
   
          if(node.left === null)
          {
              node = node.right;
              return node;
          }
           
          else if(node.right === null)
          {
              node = node.left;
              return node;
          }
   
          var aux = this.min(node.right);
          node.data = aux.data;
   
          node.right = this.removeNode(node.right, aux.data);
          return node;
      }
   
  }
  min() {
    if (this.currentNode === null) {
      return null;
    }

    let current = this.currentNode;
    while (current.left != null) {
      current = current.left;
    }

    return current.data;
  }

  max() {
    if (this.currentNode === null) {
        return null;
      }
  
      let current = this.currentNode;
      while (current.right != null) {
        current = current.right;
      }
  
      return current.data;
  }
}

module.exports = {
  BinarySearchTree
};