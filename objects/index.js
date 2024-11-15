// Initial object
let obj = {
    name: "hello",
    lastName: "world",
    time: "morning",
    fullName: function() {
        return this.name + " " + this.lastName;
    }
};

// Add a val to the object
obj.age = 30;
console.log("add to Object: : ", obj); 

// Remove val from the object
delete obj.age;
console.log("remove from object: ", obj); 

// Object.keys
let keys = Object.keys(obj);
console.log("Object.keys() output: ", keys);

// object.keys  // to loop over use forEach of map etc. 
console.log("Object.keys method: ")
Object.keys(obj).map(key => {
    console.log("Key: ", key);
});
// Object.values
let values = Object.values(obj);
console.log("Object.values(): ", values);

// object.values  
console.log("Object.values method: ")
Object.values(obj).map(value => {
    console.log("Value: ", value);
});

// Object.assign, add or update values to target from obj
let newObj = { age: 30, location: "Earth" };
let mergedObj = Object.assign({}, obj, newObj);
console.log("Merged object: ", mergedObj);

// Using `Object.create()` to create a new object with a prototype
let prototypeObj = {
    greet: function() {
        return `Hello from ${this.name}`;
    }
};
// entries
let entries = Object.entries(obj);
console.log("Object.entries() output: ", entries);

// prototypeing
Object.prototype.greet = function() {
    return this.fullName;
}

console.log("add prototypr function: ", obj.greet())