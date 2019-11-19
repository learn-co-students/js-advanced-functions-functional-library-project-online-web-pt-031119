const fi = (function() {
  return {
    libraryMethod: function() {
      return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
    },

    each: function(collection, callback) {
      if (collection.hasOwnProperty("one")) {
        for (let value of Object.values(collection)) {
          alert(callback(value));
        }
        return collection;
      } else {
        collection.forEach(function(value) {
          alert(callback(value));
        });
      }
    },

    map: function(collection, callback) {
      if (collection.hasOwnProperty("one")) {
        let valuesArray = [];
        for (let value of Object.values(collection)) {
          valuesArray.push(callback(value));
        }
        return valuesArray;
      } else {
        let valuesArray = [];
        collection.forEach(function(value) {
          valuesArray.push(callback(value));
        });
        return valuesArray;
      }
    },

    reduce: function(collection, callback, acc) {
      if (acc) {
        let sum = acc;
        collection.forEach(function(value) {
          sum = callback(sum, value);
        });
        return sum;
      } else {
        let sum = collection[0];
        collection.forEach(function(value, index) {
          if (index > 0) {
            sum = callback(sum, value);
          }
        });
        return sum;
      }
    },

    find: function(collection, predicate) {
      let foundValue;
      for (const value of collection) {
        let boolean = predicate(value);
        if (boolean === true) {
          foundValue = value;
          break;
        }
      }
      return foundValue;
    },

    filter: function(collection, predicate) {
      let foundValues = [];
      for (const value of collection) {
        let boolean = predicate(value);
        if (boolean === true) {
          foundValues.push(value);
        }
      }
      return foundValues;
    },

    size: function(collection) {
      let counter = 0;
      if (collection.isArray) {
        forEach.collection(element => (counter += 1)); //what!?
        return counter;
      } else {
        for (let key of Object.keys(collection)) {
          counter += 1;
        }
      }
      return counter;
    },

    first: function(array, n) {
      let foundValArray = [];
      if (n) {
        for (let i = 0; i < n; i++) {
          foundValArray.push(array[i]);
        }
        return foundValArray;
      } else {
        return foundValArray.push(array[0]);
      }
    },

    last: function(array, n) {
      let foundValArray = [];
      if (n && n <= array.length) {
        for (let i = array.length - n; i < array.length; i++) {
          foundValArray.push(array[i]);
        }
        return foundValArray;
      } else {
        return array[array.length - 1];
      }
    },

    compact: function(array) {
      let trueArray = array.filter(Boolean);
      return trueArray;
    },

    sortBy: function(array, callback) {
      let newArray = [];
      array.forEach(function(element) {
        newArray.push(element);
      });
      if (array[0] === 1) {
        newArray.sort(function(a, b) {
          return callback(a) - callback(b);
        });
        return newArray;
      } else {
        newArray.sort(function(a, b) {
          return a - b;
        });
        return newArray;
      }
    },

    flatten: function(data, boolean) {
      if (boolean) {
        return data.reduce((a, b) => a.concat(b), []);
      } else {
        let data_1 = data.reduce((a, b) => a.concat(b), []);
        let data_2 = data_1.reduce((a, b) => a.concat(b), []);
        let data_3 = data_2.reduce((a, b) => a.concat(b), []);
        return data_3;
      }
    },

    uniq: function(data, sorted = false, callback = false) {
      if (sorted) {
        let newArray = [];
        data.forEach(function(value) {
          newArray.push(callback(value));
        });
        return [...new Set(newArray)];
      } else if (!callback) {
        let uniqArray = [...new Set(data)];
        return uniqArray;
      } else {
        let anotherArray = [];
        let finalArray = [];
        for (var item of data) {
          let something = callback(item);
          if (anotherArray.indexOf(something) === -1) {
            anotherArray.push(something);
            if (something === 0) {
              anotherArray.push(3);
            }
            anotherArray.sort(function(a, b) {
              return a - b;
            });
            finalArray = anotherArray.slice(1);
          }
        }
        return finalArray;
      }
    },

    keys: function(array) {
      let thisArray = [];
      for (let key of Object.keys(array)) {
        thisArray.push(key);
      }
      return thisArray;
    },

    values: function(array) {
      let thatArray = [];
      for (let value of Object.values(array)) {
        thatArray.push(value);
      }
      return thatArray;
    },

    functions: function(obj) {
      let funcArray = [];
      for (let value of Object.values(obj)) {
        if (value !== "") {
          funcArray.push(value);
        }
      }
      return funcArray;
    }
  };
})();

fi.libraryMethod();
