function Stack() {
  this.count = 0;
  this.storage = {};

  this.push = (value) => {
    this.storage[this.count] = value; // {0:value} if count ==0
    this.count++;
  };
  this.pop = () => {
    if (this.count === 0) {
      return undefined;
    }
    this.count--; //decrease elements
    var result = this.storage[this.count]; // put the last element on variable
    delete this.storage[this.count]; // delete the last element
    return result; // return the last element that was deleted
  };
  this.size = () => {
    return this.count;
  };
  this.peek = () => {
    return this.storage[this.count - 1];
  };
}
var myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.size());
