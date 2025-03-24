const { describe, it} = require("node:test");
const { sum } = require("./sum.js");

const assert = require ("assert");



// describe("Testiranje funkcije sume elemenata niza sum(arr)", function() {
//     it("Da li je sum([1, 2]) == 3", function() {
//         assert.equal(sum([1, 2]), 3);
//     });
// });
// Za ovaj nacin, u konzoli treba pozvati komandu: mocha --ui .\unitTest.js

suite("Testiranje funkcije sume elemenata niza sum(arr)", function(){
    test("Da li je sum([1, 2] == 3", function (){
        assert.equal(sum([1, 2]), 3);
    });
});
//Za ovaj nacin u konzoli treba pozvati komandu mocha --ui tdd.\unit_test.js