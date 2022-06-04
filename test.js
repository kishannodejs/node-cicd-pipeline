//  {
//     console.time("loop");
//     for (var i = 0; i < 1000000; i += 1){
//         // Do nothing
//     }
//     console.timeEnd("loop");
// }

// Find a program to calculate the sum of N-th row of the below pattern
// Eg : 5th-row sum = 29



// 1
// 3 2
// 6 2 3
// 10 2 3 4
// 15 2 3 4 5


// Code here…

var k=1;

for (i=0; i<5; i++){

for(j=i+1; j<i; j++){

if(i==0){

console.log(i+k);
k++;
} else {

console.log(i);

}

}
}

