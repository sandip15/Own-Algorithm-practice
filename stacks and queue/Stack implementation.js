// Our given task is to implement a stack data structure using a linked list
// Stack is a data structure where the last element inserted gets out first. (LIFO)

class Node{                            //defining the basic structure of the node (to be used leter)
  constructor(value){
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor(){              // in the beginning, initially both the pointer is pointing to the null since there 
                              //is no node inside. later on we shift those pointers 
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  push(value){                             //pushing new value in the stack 
    let newnode = new Node(value)
    if (this.length === 0){            //  at the beginnig when there is no node present in the stack 
      this.top = newnode;
      this.bottom = newnode;
    }else{
      let holdingPointer = this.top;
      this.top = newnode;
      this.top.next = holdingPointer;
    }
    this.length++;
    // return this;
  }
  peek(){                             // look for the element at the top of the stack
    return this.top;
  }
  pop(){ //removing the last item added to the stack 
    if (this.length === 0 ){
      return "no items to pop"
    }
    if (this.top === this.bottom){
      this.bottom = null;
    }
    this.top = this.top.next; //we just move the pointer pointing to the top to the next node to get rid of the top most node
    
    this.length --;
    return this;
  }
}

const myStack = new Stack                 //instantiating new stack created before

myStack.push(5)
myStack.push(10)
myStack.push(15)
myStack.push(20)

myStack.peek()

myStack.peek()
myStack.pop()
myStack.pop()

// Implement the queue data structure:
