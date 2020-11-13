function showMultiplicationTable(num) {
    for (var i = 1; i < 11; i++) {
        console.log(num + " x " + i + " = " + (num*i))
    }
}
//showMultiplicationTable(7);

var randomNumber=(Math.random()*180+20).toFixed(0);
//console.log(randomNumber);

for (var i =0; i<10; i++){
    var randomNumber=(Math.random()*180+20).toFixed(0);
    if (randomNumber%2==0){
        console.log(randomNumber + " is even");
    } else {
        console.log(randomNumber + " is odd");
    }
}


for (var j =1; j<10; j++){
    var string= j.toString();
    console.log(Number(string.repeat(j)));
}
// for (var i=1; i<10; i++){
//     //creates an empty array for each iteration of i
//     var array=[];
//     for (var j=1; j<(i+1); j++){
//         // will push i into an array, i times
//         array.push(i);
//     }
//     console.log(array.join(""))
// }
// for (var k =100; k>0; k--){
//     if (k%5===0){
//         console.log(k)
//     }
// }
for (var k=100; k>0; k-=5){
    console.log(k);
}

