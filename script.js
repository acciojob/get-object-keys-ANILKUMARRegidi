//your JS code here. If required.
// Create an object called student with a property called name
const student = {
  name: 'John Doe'
};

// Add a property to the Object prototype called getKeys()
Object.prototype.getKeys = function() {
  // Use Object.keys to get an array of all keys in the object
  return Object.keys(this);
};

// Test the getKeys() method on the student object
const keysArray = student.getKeys();

// Log the result
console.log(keysArray);
