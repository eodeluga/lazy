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
    
    /* evaluate(...args: number[]): number[] {
    // Should return result of calculating args received by add()
    console.log(this.add(1, 2, 3));
    //console.log(this.intermediate[0][1]);
    return [0]; // dummy data
  } */
}

// Just testing things out
const computation = new Lazy();
computation.add((a: number) => a * 2, 1, 2).add(() => 4 + 8, 2);