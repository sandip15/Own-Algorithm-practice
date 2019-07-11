//implement a stack data structure using a linked list

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor(){              // initially both the pointer is pointing to the null since there is no node inside.
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  push(value){                             //pushing new value in the stack 
    let newnode = new Node(value)
    if (this.length === 0){
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
  peek(){
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

const myStack = new Stack                 //instantiating new stack 

myStack.push(5)
myStack.push(10)
myStack.push(15)
myStack.push(20)

myStack.peek()

myStack.peek()
myStack.pop()
myStack.pop()
