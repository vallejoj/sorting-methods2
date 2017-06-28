var sort = [233, 4, 1, 33,5,8,99,88, 11, 7, 9,66]

function insert(num){
  for (var i = 0; i < num.length; i++) {

    var temp= num[i];
    var j = i - 1;
    while(j>=0 && num[j]>temp){
      console.log(i,j)         
      num[j + 1] = num[j]
      j--
    }
     num[j + 1] = temp;
  }

  return num
}
console.log(insert(sort))
