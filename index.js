const fi = (function() {
  return {
    libraryMethod: function() {
      return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
    },

    each: function(collection, callback) {
      if (typeof collection === "object") {
        for (let value of Object.values(collection)) {
          alert(callback(value));
        }
        return collection;
      } else {
        collection.forEach(function(value) {
          alert(callback(value));
        });
        return collection;
      }
    },

    map: function(collection, callback) {
      if (typeof collection === "object") {
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
      for (let key of Object.keys(collection)) {
        counter += 1;
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
      if (isNaN(array[0])) {
        newArray.sort(function(a, b) {
          return a - b;
        });
        return newArray;
      } else {
        newArray.sort(function(a, b) {
          return callback(a) - callback(b);
        });
        return newArray;
      }
    },

    flatten: function(array, shallow) {
      let results = [];
      array.forEach(element => {
        if (Array.isArray(element) && !shallow) {
          results = results.concat(fi.flatten(element, shallow));
        } else if (Array.isArray(element)) {
          // results = results.concat(element);
          results.push(...element);
        } else {
          results.push(element);
        }
      });
      return results;
    },

    uniq: function(collection, isSorted, callback = x => x) {
      let uniqArray = [];
      if (!isSorted) {
        collection.forEach(element => {
          let transmutedElem = callback(element);
          let foundInUniqArray = false;
          uniqArray.forEach(uniqElem => {
            if (transmutedElem === uniqElem) {
              foundInUniqArray = true;
            }
          });
          if (!foundInUniqArray) {
            uniqArray.push(transmutedElem);
          }
        });
        return uniqArray;
      } else {
        //sorted
        collection.forEach(element => {
          let transmutedElem = callback(element);
          if (transmutedElem !== uniqArray[uniqArray.length - 1]) {
            uniqArray.push(transmutedElem);
          }
        });
        return uniqArray;
      }
    },

    keys: function(array) {
      let keyArray = [];
      for (let key of Object.keys(array)) {
        keyArray.push(key);
      }
      return keyArray;
    },

    values: function(array) {
      let valueArray = [];
      for (let value of Object.values(array)) {
        valueArray.push(value);
      }
      return valueArray;
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
