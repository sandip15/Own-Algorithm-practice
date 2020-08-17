/* Question: implementing the linked list data structure and performing different operations of linked list for having a better 
understanding about how this data structure works underneath the hood */

class Node{                      // Overall basic structure of the node in linked list
  constructor(value){
    this.value = value
    this.next = null
  }
}

class LinkedList{
  constructor(value){
    const newNode = new Node(value)
    this.head = newNode
    this.tail =this.head;
    this.length = 1
  }
  append(val){                                   //adding a new element at the very last of the linked list
    const newNode  = new Node(val)
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(val){                                  // adding another new element at the very beginning of the linked list
    const newNode = new Node(val);
    newNode.next = this.head
    this.head = newNode;
    this.length++;
    return this;
  }

  //printing out all the values in an array for a better result and clear understanding 

  printLinkedList(){
    const arr = []
    let currentNode = this.head;
    while(currentNode !== null){
      arr.push(currentNode.value)
      currentNode = currentNode.next
    }
    console.log(arr);
  }

  //inseting/adding elements in the middle of the linked list 
  insert(index, value){
    if (index >= this.length){
      return this.append(value)
    }

    const newNode = new Node(value);
    let previousNodeOfIndex = this.traverseToIndex(index-1)
    let holdingPointer = previousNodeOfIndex.next
    previousNodeOfIndex.next = newNode;
    newNode.next = holdingPointer
    this.length++
    return this.printLinkedList()
  }
  /*First by traversing the linked list we need to find the position to insert the new node according to the given index */
  traverseToIndex(index){
    let currentNode = this.head;
    let counter = 0;
    while (counter != index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  
  //Removing the node according to the position of the given index
  removeNode(index){
    if (index === 0){
      this.head = this.head.next
      return this;
    }
    let currentNode = this.head;
    let previousNodeToIndex = this.traverseToIndex(index-1);
    let deletingNode = previousNodeToIndex.next;
    let nextNodetoIndex = deletingNode.next

    previousNodeToIndex.next = nextNodetoIndex;
    this.length --;    // after removing the element we need to decrease the length of the tree by 1
    return this.printLinkedList();

  }

}

const myLinkedList = new LinkedList(10);

// performing few tests to see the result of the previous operations
myLinkedList.append(5);
myLinkedList.append(15);
myLinkedList.prepend(1);
myLinkedList.prepend(2);

myLinkedList.insert(3,20)
myLinkedList.removeNode(4)
