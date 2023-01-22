const chai = require('chai')
const chaiArrays = require("chai-arrays");
const cArr = chai.use(chaiArrays);

import { Lazy } from "./app"
describe("Lazy evaluation tests", () => {
    
    let computation = new Lazy();
        let result = computation
        // simple function
        .add(function timesTwo(a: number): number { return a * 2; }) // simple function
        // a lus function that will be given 1 as its first argument
        .add(function plus(a: number, b: number): number { return a + b; }, 1) 
        // compute the final result
        .evaluate([1, 2, 3]);
        
    it("should be an array", async function () {
        cArr.expect(result).to.be.an('array');
    });
    
    it("should return correct values", async function () {
        cArr.expect(result).to.be.equalTo([3, 5, 7]);
    });
})