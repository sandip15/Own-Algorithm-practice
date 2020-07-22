//Question: need to Implement a binary search tree from the scratch
//At the end we are gonna make the following binary tree by inserting those data
// structure of the tree: The binary tree should look like the following
//          9
//     4          20
// 1       6   15     170

class Node {              // basic structure of the node , each node in the binary tree will consist of the following structure
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
  insert(value){      // function to insert a value into the binary tree
    let newNode = new Node(value);
    if (this.root === null){
      this.root = newNode;
    }else{
      let presentNode = this.root;
      while(true){
        if (value < presentNode.value){
              //traverse the left of the tree 
          if (!presentNode.left){
            presentNode.left = newNode;
            return this;
          }
          presentNode = presentNode.left 
        }else{
          //traverse the right of the tree
          if (!presentNode.right){
            presentNode.right = newNode;
            return this;
          }
          presentNode = presentNode.right  
        }
      }
    }
  }

  lookup(value){                //searching for a value (if that is present) in the binary tree
    if (this.root === null){
      return ": tree"
    }else{
      let currentNode = this.root
      while(currentNode){
        if (value < currentNode.value){           //traversing the  left side of the binary tree
          currentNode = currentNode.left;
        }else if(value > currentNode.value){      // traversing the right side of the binary tree
          currentNode = currentNode.right;
        }else if(currentNode.value === value){
          return currentNode
        }
      }
    }
    return ("sorry no such node with this value" ) // if no match is found
  }
}

const tree = new BinarySearchTree
// implementing the insert function: need to insert some values first
tree.insert(9)
tree.insert(4)
tree.insert(20)
tree.insert(1)
tree.insert(6)
tree.insert(15)
tree.insert(170)
tree.lookup(20)


