// Sets

function mySet() {
  var collection = [];

  //   To check if collection has the element
  this.has = (element) => {
    return collection.indexOf(element) !== -1;
  };

  // To add element to collection

  this.add = (element) => {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    } else {
      return false;
    }
  };

  // get all values of collection

  this.values = () => {
    return collection;
  };

  // to remove element from collection

  this.remove = (element) => {
    if (this.has(element)) {
      var index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    } else {
      return false;
    }
  };

  // to get size of collection

  this.size = () => {
    return collection.length;
  };

  //   union two sets

  this.union = (otherSet) => {
    var unionSet = new mySet();
    var firstSet = this.values();
    var secondSet = otherSet.values();

    firstSet.forEach((element) => {
      unionSet.add(element);
    });

    secondSet.forEach((element) => {
      unionSet.add(element);
    });
    return unionSet;
  };

  //   intersections of two sets

  this.intersection = (otherSet) => {
    var intersectionSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach((e) => {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };

  //   Get difference from two sets

  this.defference = (otherSet) => {
    var defferenceSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach((e) => {
      if (!otherSet.has(e)) {
        defferenceSet.add(e);
      }
    });
    return defferenceSet;
  };

  //   subsets of sets   (every element in the first set exist in second set)

  this.subset = (otherSet) => {
    var firstSet = this.values();
    return firstSet.every((element) => {
      return otherSet.has(element);
    });
  };
}
// Testing
var my_Set = new mySet();
my_Set.add(5);
my_Set.add(3);
my_Set.add(8);
my_Set.add(3);
my_Set.add(4);
my_Set.add(1);

var secondSet = new mySet();
secondSet.add(4);
secondSet.add(7);
secondSet.add(8);
secondSet.add(3);
console.log(my_Set.defference(secondSet).values());
console.log(my_Set.intersection(secondSet).values());
console.log(my_Set.union(secondSet).values());
console.log(my_Set.subset(secondSet));
