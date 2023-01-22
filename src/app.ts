// Creates generic type alias for the lazy expression
// The lazy can have unlimited params
type TLazy<T> = (...args: number[]) => T;

export class Lazy {
    // Tuple array storing lazys passed into add function
    // and an array of other args passed into add
    private lazyStore: [TLazy<number | void>, number[]][] = [];
    
    // The lazy is an optional param
    add(lazy?: TLazy<number>, ...args: number[]): this {
        // Store the lazy and args if a lazy is passed in
        // Otherwise just store the args
        lazy ? this.lazyStore.push([lazy, args]) : this.lazyStore.push([() => {}, args]);
        return this;      
    }
    
    evaluate(v: number[]): number[] {
        let runTotal: number[] = [];
        let evaluation: number[] = [];
        v.forEach(val => {
            this.lazyStore.forEach((outerArr) => {
                // Execute lazy with evaluate's arg as its parameter
                let lExprRes = outerArr[0](val);
                // Sum additional add function parameters
                let lArgsSum = outerArr[1].reduce((partialSum, a) => partialSum + a, 0);
                // If lazy expression produced a result, add that to args sum and store
                // Otherwise just store args sum
                runTotal.push(lExprRes ? lExprRes + lArgsSum : lArgsSum);
            })
            evaluation.push(runTotal.reduce((partialSum, a) => partialSum + a, 0))
            runTotal = [];
        })
        return evaluation;
    }
}

let computation = new Lazy();
let result = computation
    // simple function
    .add(function timesTwo(a: number): number { return a * 2; }) // simple function
    // a plus function that will be given 1 as its first argument
    .add(function plus(a: number, b: number): number { return a + b; }, 1) 
    // compute the final result
    .evaluate([1, 2, 3]);

console.log(result);
// [3, 5, 7]