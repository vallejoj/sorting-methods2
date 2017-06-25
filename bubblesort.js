var sort = [233, 4, 1, 33,5,8,99,88, 11, 7, 9,66]

function sorter(number) {


var swap = true
  while (swap===true) {
    swap=false
    for (var i = 0; i < number.length; i++) {
      if (number[i] > number[i + 1]) {
        y = number[i]
        number[i] = number[i + 1]
        number[i + 1] = y
            swap= true
      }

      }

    }
    return number
  }




// function sorter(number){
//   for (var i = 0; i < number.length; i++) {
//     for (var i = 0; j < array.length; j++) {
//       if (number[i] > number[i + 1]) {
//              y = number[j]
//              number[j] = number[j + 1]
//              number[j + 1] = y
//     }
//   }
//
// }



console.log(sorter(sort))
