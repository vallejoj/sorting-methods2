var sort = [4, 233, 1, 33,5]

function quickSort(number){
    var pivot= [number[0]]
var left=[]
var right=[]
for (var i = 1; i <number.length; i++) {
      if(number.length>1){
        if (pivot>number[i]) {
          left.push(number[i])
        }else{
          right.push(number[i])
        }
      }
    }

    
    console.log(right)
    console.log(left)
    console.log(pivot)
  return number

}

console.log(quickSort(sort))
