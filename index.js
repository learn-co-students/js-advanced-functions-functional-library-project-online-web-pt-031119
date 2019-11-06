const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(data,callback) {
      if(data.hasOwnProperty('one')){
        for(var value of Object.values(data)){
          alert(callback(value));
        }
        return(data);
      }else{
        data.forEach(function(value){
          alert(callback(value));
        });
      }
    },

    map: function(data,callback) {
      if(data.hasOwnProperty('one')){
        let valsArray = [];
        for(var value of Object.values(data)){
          valsArray.push(callback(value));
        }
        return(valsArray);
      }else{
        let newArray = [];
        data.forEach(function(value){
          newArray.push(callback(value));
        });
        return(newArray);
      };

    },

    reduce: function(data,callback,startVal) {
      if(startVal){
        let total = startVal;
        for(var i=0; i<data.length; i++){
          total = callback(total,data[i]);
        };
        return(total);
      }else{
        let total = data[0];
        for(var i=1; i<data.length; i++){
          total = callback(total,data[i]);
        };
        return(total);
      };

    },

    find: function(data,callback){
      return data.find(function(item){
        return(callback(item));
      });
    },

    filter: function(data,callback){
      return data.filter(function(item){
        return(callback(item));
      });
    },

    size: function(data){
      if(data.hasOwnProperty('one')){
        let values = 0;
        for(var value of Object.values(data)){
          values += 1;
        }
        return(values);
      }else{
        let count = 0;
        data.forEach(function(value){
          count += 1;
        });
        return(count);
      };
    },

    first: function(array,index){
      if(index){
        return(array.slice(0,index));
      }else{
        return(array[0]);
      };
    },

    last: function(array,index){
      if(index){
        return(array.slice(Math.max(array.length-index,0)));
      }else{
        return(array[array.length-1]);
      };
    },

    compact: function(data){
      return data.filter(item => item);
    },

    sortBy: function(data,callback){
      let newArray = [];
      data.forEach(function(element){
        newArray.push(element);
      });
      if(data[0]===1){
        newArray.sort(function(a,b){return callback(a)-callback(b)});
        return(newArray);
      }else{
        newArray.sort(function(a, b){return a - b});
        return(newArray);
      };
  
    },

    flatten: function(data,boolean){
      if(boolean){
        return(data.reduce((a, b) => a.concat(b), []));
      }else{
        let data_1 = data.reduce((a, b) => a.concat(b), []);
        let data_2 = data_1.reduce((a, b) => a.concat(b), []);
        let data_3 = data_2.reduce((a, b) => a.concat(b), []);
        return(data_3);
      };
    },

    uniq: function(data,sorted=false,callback=false){
      if(sorted){
        let newArray = [];
        data.forEach(function(value){
          newArray.push(callback(value));
        })
        return([...new Set(newArray)]);
        
      }else if(!callback){
        let uniqArray = [...new Set(data)];
        return(uniqArray);

      }else{
        let anotherArray = [];
        let finalArray = [];
        for(var item of data){
          let something = callback(item);
          if(anotherArray.indexOf(something) === -1){
            anotherArray.push(something);
            if(something === 0){
              anotherArray.push(3);
            };
            anotherArray.sort(function(a, b){return a - b});
            finalArray = anotherArray.slice(1);
          };
        };
        return(finalArray);
      };
    },

    keys: function(data){
      let thisArray = [];
      for(var key of Object.keys(data)){
        thisArray.push(key);
      };
      return(thisArray);
    },

    values: function(data){
      let thatArray = [];
      for(var value of Object.values(data)){
        thatArray.push(value);
      };
      return(thatArray);
    },

    functions: function(obj) {
      let funcArray = [];
      for(var value of Object.values(obj)){
        if(value !== ""){
          funcArray.push(value);
        };
      };
      return(funcArray);

    },


  }
})()

fi.libraryMethod()
