var i =2;

while (i<60000){
    i*=2;
    console.log(i);
}

var allCones=Math.floor(Math.random()*50+50)

do{
    var soldCones=Math.floor(Math.random()*5+1);
    if (allCones>soldCones) {
        console.log(soldCones + "cones sold!")
        allCones-=soldCones;
        console.log(allCones + " cones remaining!")
    } else if (allCones<soldCones){
        console.log("Cannot sell " + soldCones+ "cones I only have "+ allCones + "...")
    } else{
        console.log("Yay! I sold them all!")
        allCones-=soldCones;
    }
} while (allCones>0);