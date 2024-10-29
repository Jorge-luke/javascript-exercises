let arr = [1,2,3,4,5];

const removeFromArray = function(array, ...items) {


    for (let i=array.length-1;i>=0;i--){
         
   if (items.includes(array[i])){
        array.splice(i,1);
}

}
    return array;
}

console.log(arr);



// Do not edit below this line
module.exports = removeFromArray;