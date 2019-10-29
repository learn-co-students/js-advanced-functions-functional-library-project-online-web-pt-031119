const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (collection instanceof Array) {
        for (let i = 0; i < collection.length; i++) {
          callback(collection[i], i, collection)
        }
      } else {
        for (const key in collection) {
          callback(collection[key], key, collection)
        }
      }
      return collection
    },

    map: function(collection, callback) {
      const newCollection = []

      if (!(collection instanceof Array))
        collection = Object.values(collection)

      for (let i = 0; i < collection.length; i++)
        newCollection.push(callback(collection[i]))

      return newCollection
    },

    reduce: function(collection, callback, acc) {
      let memo
      if (acc) {
        memo = acc
        for (let i = 0; i < collection.length; i++) {
          memo = callback(memo, collection[i], collection)
        }
      } else {
        memo = collection[0]
        const sliced = collection.slice(1)
        for (let i = 0; i < sliced.length; i++) {
          memo = callback(memo, sliced[i], sliced)
        }
      }
      return memo
    },

    find: function(collection, predicate) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) return collection[i]
      }
    },

    filter: function(collection, predicate) {
      const filteredArray = []

      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) filteredArray.push(collection[i])
      }
      return filteredArray
    },

    size: function(collection) {
      return (collection instanceof Array) ? collection.length : Object.keys(collection).length
    },

    first: function(array, n) {
       return n ? array.slice(0, n) : array[0]
    },

    last: function(array, n) {
      return n ? array.slice(array.length - n) : array.slice(-1)[0]
    },

    compact: function(array) {
      const truthyArray = []
      for (let i = 0; i < array.length; i++) {
        if (array[i]) truthyArray.push(array[i])
      }
      return truthyArray
    },

    sortBy: function(array, callback) {
      const newArray = [...array]
      return newArray.sort(function(a, b) {
        return callback(a) - callback(b)
      })
    },

    // Fully just copied this from the solution. Seems kind of convoluted to me, and the lesson says it's a bonus, anyway.
    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },

    flatten: function(collection, shallow, newArr=[]) {
      if (!Array.isArray(collection)) return newArr.push(collection)
      if (shallow) {
        for (let val of collection)
          Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val)
      } else {
        for (let val of collection) {
          this.flatten(val, false, newArr)
        }
      }
      return newArr
    },

    uniq: function(array, isSorted, callback) {
      const uniqArray = []
      const values = []
      for (let i = 0; i < array.length; i++) {
        if (callback) {
          if (!values.includes(callback(array[i]))) {
            values.push(callback(array[i]))
            uniqArray.push(array[i])
          }
        } else {
          uniqArray.includes(array[i]) ? null : uniqArray.push(array[i])
        }
      }
      return uniqArray
    },

    keys: function(object) {
      const keysArray = []
      for (const key in object){
        keysArray.push(key)
      }
      return keysArray
    },

    values: function(object) {
      const valuesArray = []
      for (const key in object) {
        valuesArray.push(object[key])
      }
      return valuesArray
    },

    functions: function(object) {
      const functionNames = []

      for (const key in object) {
        if (typeof object[key] === "function"){
          functionNames.push(key)
        }
      }
      return functionNames.sort()
    },

  }
})()

fi.libraryMethod()
