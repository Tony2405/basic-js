const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr){
  let new_arr = [];
  if (Array.isArray(arr) == false){throw new Error("'arr' parameter must be an instance of the Array!")}
  for (let index = 0; index < arr.length; index++) {
      if(arr[index] === '--discard-next' && arr[index+2] === '--double-prev'){ index +=2}

      else if (arr[index] === '--double-next' && arr[index+2] === '--double-prev'){new_arr.push(arr[index+1]);}
      else if (arr[index] === '--discard-next' && arr[index+2] === '--discard-prev'){index +=2}
      else if (arr[index] === '--double-next' && arr[index+2] === '--discard-prev'){new_arr.push(arr[index+1]);index+=2}


      else if((arr[index] === '--double-next' || arr[index] === '--discard-next') && typeof(arr[index+1]) === 'undefined'){
          continue
      }
      else if ((arr[index] === '--double-prev' || arr[index] === '--discard-prev') && typeof(arr[index-1]) === 'undefined'){
          continue
      }
      else if ((arr[index] === '--double-prev' || arr[index] === '--discard-prev') && typeof(arr[index-1]) === 'undefined'){
          continue
      }
      else if(arr[index] === '--double-next'){
      new_arr.push(arr[index+1]);
     }
     else if(arr[index] === '--discard-prev'){
      new_arr.pop()
     }
     else if(arr[index] === '--discard-next'){
      index += 1;
     }
     else if(arr[index] === '--double-prev'){
      new_arr.push(arr[index-1])
     }
     else{new_arr.push(arr[index])}
  }
  return new_arr;
}

module.exports = {
  transform
};
