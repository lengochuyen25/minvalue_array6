
function minArray(arr) {
    if(arr.length == 0)
        return -1;
    let min = arr[0];

    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}
let arr2 = [2, 12, 9, 20, 56, 89];
let min = minArray(arr2);
alert(min);




