// var myarray = [123,123,122,12334,1212,1211,321,2334,1211,2123,1221,222,122]; // Forth highest

// var temp = '';

// var n = myarray.length;


// for(var i=0; i<n-1; i++){
//     for(j=i+1; j<n; j++){
//      if(myarray[i]>myarray[j]){
//          temp = myarray[i];
//          myarray[i] = myarray[j];
//          myarray[j]=temp;
//      }
//     }
// }

// console.log(myarray);

// console.log(myarray[n-4]);

{
    console.time("loop");
    for (var i = 0; i < 1000000; i += 1){
        // Do nothing
    }
    console.timeEnd("loop");
}