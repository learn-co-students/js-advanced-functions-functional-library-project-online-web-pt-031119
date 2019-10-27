const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (Array.isArray(collection)) {
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
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          newCollection.push(callback(collection[i], i, collection))
        }
      } else {
        for (const key in collection) {
          newCollection.push(callback(collection[key], key, collection))
        }
      }
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
        const slicedColl = collection.slice(1)
        for (let i = 0; i < slicedColl.length; i++) {
          memo = callback(memo, slicedColl[i], slicedColl)
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
      const filteredArr = []
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) filteredArr.push(collection[i])
      }
      return filteredArr
    },

    first: function(array, n) { //why does fn signature have 2nd param '[n]'
      return n ? array.slice(0, n) : array[0]
    },

    size: function(collection) {
      let count = 0
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) count ++
      } else {
        for (const key in collection) count++
      }
      return count
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
      const arrCopy = [...array]
      return arrCopy.sort((a, b) => callback(a) - callback(b))
    },

    flatten: function(array, shallow) {
      return array.flat(shallow || Infinity)
    //   let current = [...array]
    //   let next = []
    //   let flattened = []
    //   while (current) {
    //     if (Array.isArray(current)) next = current.concat(next)
    //     else flattened.push(current)
        
    //     current = next.shift()
    //   }
    //   return flattened
    // 
    },

    uniq: function(array, isSorted, callback) { // not sure how to incorporate isSorted
      const uniqArr = []
      const values = []
      for (let i = 0; i < array.length; i++) {
        if (callback) {
          if (!values.includes(callback(array[i]))) {
            values.push(callback(array[i]))
            uniqArr.push(array[i])
          }
        } else {
          uniqArr.includes(array[i]) ? null : uniqArr.push(array[i])
        }
      }
      return uniqArr
    },

    keys: function(object) {
      const keysArr = []
      for (const key in object) {
        keysArr.push(key)
      }
      return keysArr
    },

    values: function(object) {
      const valuesArr = []
      for (const key in object) {
        valuesArr.push(object[key])
      }
      return valuesArr
    },

    functions: function(object) {
      const functionsArr = []
      for (const key in object) {
        if (typeof object[key] === 'function') functionsArr.push(object[key])
      }
      console.log(functionsArr)
    }
  }
})()

fi.libraryMethod()
                                                                               