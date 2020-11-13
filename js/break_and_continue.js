var i=0;
do{
    var promptNumber =prompt("enter a number between 1 and 50");
} while( isNaN(promptNumber) ===true || promptNumber<0 && promptNumber>50 || promptNumber%2!==0);

while (i<50){
    i++;
    if ( i ==promptNumber){
        continue;
    }
    if ( i%2!==0){
        console.log("Here is an odd number: "+ i);
    }

}
