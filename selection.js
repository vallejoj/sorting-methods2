var sort = [233, 4, 1, 33,5,8,99,88, 11, 7, 9,66]

function selectionSort(num){
  var minIdx, temp,
      len = num.length;
  for(var i = 0; i < len; i++){
    minIdx = i;
    for(var  j = i+1; j<len; j++){
       if(num[j]<num[minIdx]){
          minIdx = j;
       }
    }
    temp = num[i];
    num[i] = num[minIdx];
    num[minIdx] = temp;
  }
  return num;
}

console.log(selectionSort(sort))
