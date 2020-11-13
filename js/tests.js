//console.log(returnYellow());

// if (typeof returnYellow !== "function"){
//  console.error("returnYellow is not a function");
// }

describe("returnYellow", function(){
    it("should be a defined function", function(){
        expect(typeof returnYellow).toBe("function");
    });
    it("should return 'yellow'", function(){
        expect(returnYellow()).toBe("yellow");
    })
});