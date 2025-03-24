function myQueue() {
  var collection = [];
  this.print = () => {
    return console.log(collection);
  };
  this.enqueue = (element) => {
    collection.push(element);
  };
  this.dequeue = () => {
    collection.shift();
  };
  this.front = () => {
    return collection[0];
  };
  this.size = () => {
    return collection.length;
  };
  this.isEmpty = () => {
    return collection.length === 0;
  };
}

let testQueue = new myQueue();
// console.log(testQueue.isEmpty());
// console.log(testQueue.enqueue(5));
testQueue.enqueue(5);
testQueue.enqueue(6);
testQueue.enqueue(7);
testQueue.print();

testQueue.dequeue();
testQueue.print();
