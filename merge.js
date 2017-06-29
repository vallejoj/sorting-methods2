var sort = [233, 4, 1, 33,5,8,99,88, 11, 7, 9,66]


function mergeSort (num) {
    if (num.length < 2) return num;

    var mid = Math.floor(num.length /2);
    var subLeft = mergeSort(num.slice(0,mid));
    var subRight = mergeSort(num.slice(mid));

    return merge(subLeft, subRight);
}

function merge (a,b) {
    var result = [];
    while (a.length >0 && b.length >0)
        result.push(a[0] < b[0]? a.shift() : b.shift());
    return result.concat(a.length? a : b);
}

console.log(mergeSort(sort))
