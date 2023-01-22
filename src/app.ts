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
}