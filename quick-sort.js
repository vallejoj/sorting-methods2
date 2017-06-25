var sort = [33,4,55, 233, 1,5]

function quickSort(number){
  var pivot= [number[0]]
  var left=[]
  var right=[]

  if(number.length<1){
    return number
  }
for (var i = 1; i <number.length; i++) {
        if (pivot>=number[i]) {
          left.push(number[i])
        }else{
          right.push(number[i])
        }

    }


    console.log(right)
    console.log(left)
    console.log(pivot)
  return quickSort(left).concat(pivot,quickSort(right))

}

console.log(quickSort(sort))
