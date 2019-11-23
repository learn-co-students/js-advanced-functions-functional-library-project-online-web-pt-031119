const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(data, some_func) {

      if (data instanceof Array) {
        for (let i = 0; i < data.length; i++) {
          some_func(data[i])
          } 
      } else {
        let values = Object.values(data)
        for (let i = 0; i < values.length; i++) {
          some_func(values[i])
        }
      }
      return data
    },

    map: function(data, some_func) {
      let new_array = []
      if (data instanceof Array) {
        for (let i = 0; i < data.length; i++) {
          new_array.push(some_func(data[i]))
          }
      } else {
        let values = Object.values(data)
        for (let i = 0; i < values.length; i++) {
          new_array.push(some_func(values[i]))
        }
      }
      return new_array
    },

    reduce: function(some_array, some_func, start_val) {
      if (start_val) {
        let accumulator = start_val
        for (let i = 0; i < some_array.length; i++) {
          accumulator = some_func(accumulator, some_array[i], some_array)
        }
        return accumulator
      } else {
        let accumulator = some_array[0]
        for (let i = 1; i < some_array.length; i++) {
         accumulator = some_func(accumulator, some_array[i], some_array)
              }
              return accumulator
            }
    },

    find: function(data, callback) {
      for (let i = 0; i < data.length; i++) {
        if (callback(data[i])) {
          return data[i]
        }
      }
    },

    filter: function(data, callback) {
      let result = []
      for (let i = 0; i < data.length; i++) {
        if (callback(data[i])) {
          result.push(data[i])
        }
      }
      return result
    }, 

    size: function(collection) {
      if (collection instanceof Array) {
        return collection.length
      } else {
        return Object.keys(collection).length
      }
      
    }, 

    first: function (array, elements=1) {
      let result = []
      if (elements > 1) {
        for (let i = 0; i < elements; i++) {
          result.push(array[i])
        }
      } else {
        result = array[0]
      }      
      return result
    }, 

    last: function (array, elements=1) {
      let result = []
      if (elements > 1 && elements <= array.length) {
        for (let i = (array.length - 1); i >= (array.length - elements); i--) {
          result.push(array[i])
        }
        result.reverse()
      } else {
        result = array[(array.length - 1)]
      }      
      return result
    },

    compact: function(array) {
      let result = []
      for (let i = 0; i < array.length; i++) {
        if (array[i] != false && array[i] != null && array[i] != 0 && array[i] != "" && array[i] != undefined && !Number.isNaN(array[i])) {
          result.push(array[i])
        }
      }
      return result
    },

    sortBy: function(array, callback) {
      let result = [...array]
      return result.sort(function(a,b) {return callback(a) - callback(b) })
    },

    // FlatIron solution:
    // uniq: function(collection, sorted=false, iteratee=false) {
    //   if (sorted) {
    //     return fi.uniqSorted(collection, iteratee)
    //   } else if (!iteratee) {
    //     return Array.from(new Set(collection))
    //   } else {
    //     const modifiedVals = new Set()
    //     const uniqVals = new Set()
    //     for (let val of collection) {
    //       const moddedVal = iteratee(val)
    //       if (!modifiedVals.has(moddedVal)) {
    //         modifiedVals.add(moddedVal)
    //         uniqVals.add(val)
    //       }
    //     }
    //     return Array.from(uniqVals)
    //   }
    // },

    uniq: function(array, isSorted, callback) {
      let returned_array = []
      let uniq_and_sorted_array = []
      if (isSorted)  {  //if array is already sorted
        for (let i = 0; i < array.length; i++) {
          if (array[i] === array[i+1]) {
            continue
          } else {
            uniq_and_sorted_array.push(array[i])
          }
        }

      } else { //if array is not already sorted
        const uniq_array = [...array] 
            uniq_array.sort(function(a,b) {
              return a-b })
        for (let i = 0; i < uniq_array.length; i++) {
          if (uniq_and_sorted_array.includes(uniq_array[i])) {
            continue
          } else {
            uniq_and_sorted_array.push(uniq_array[i])
          }
        }

        }
      if (callback) {
        let callback_results_array = []
        let element_results_array = []
        //pass unique array elements into callback function
        for (let i = 0; i < uniq_and_sorted_array.length; i++) {
          if (callback_results_array.includes(callback(uniq_and_sorted_array[i]))) {
            continue
          } else {
            callback_results_array.push(callback(uniq_and_sorted_array[i]))
            element_results_array.push(uniq_and_sorted_array[i])
          }
        }
        return element_results_array
      } else {
        return uniq_and_sorted_array
      }
    },

    keys: function(object) {
      let result = []
      for (const key in object) {
        result.push(`${key}`)
      }
      return result
    },

    values: function(object) {
      let result = []
      for (const value in object) {
        result.push(parseInt(`${object[value]}`, 10))
      }
      return result
    },

  flatten: function(array, single_level) {
      let result = []
      if (single_level) { //flattens the array down one level
        for (let i = 0; i < array.length; i++) {
          if (Array.isArray(array[i])) {
            for (let a = 0; a < array[i].length; a++) {              result.push(array[i][a])
            }
          } else {
            result.push(array[i])
          }
        }
      } else {
        for (let i = 0; i < array.length; i++) {
          if (Array.isArray(array[i])) {
            result = result.concat(this.flatten(array[i]))
          } else {
            result.push(array[i])
          }
        }
      }
      return result
    },

    functions: function(object) {
      let result = []
      let elements = Object.values(object)
      for (let i=0; i < elements.length; i++) {
        if (typeof(elements[i]) === 'function')
          result.push(elements[i])
      }
      return result
    },

  }
})()

fi.libraryMethod()
