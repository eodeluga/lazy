type TLazy<T> = () => T;

/* interface ILazy {
  add(f: T, ...args: number[]): this;
  evaluate(...args: number[]): number[];
} */

class Lazy<T> /*implements ILazy<number>*/ {
  //private intermediate: Array<[TLazy<number>, number[]]> = [];
  private accumalator: number[] = [];
  add(a: TLazy<number>, ...args: number[]): this {
    const adder = (z: number) => z
        ? a() + args.reduce((prevArg: number, currArg: number) => prevArg + currArg)
        : 0;
    this.accumalator.push(adder(a()));
    return this;
  }

  //(a) => a + (z(1));

  //TLazy(1) //+ args.reduce((partialSum, a) => partialSum + a, 0);

  // Do I store the received function and the arguments in an array
  // If so would it be better to build a queue like this
  // https://dev.to/glebirovich/typescript-data-structures-stack-and-queue-hld
  //this.intermediate.push([a, args.reduce((prevArg: number, currArg: number) => prevArg + currArg)]);
  //this.intermediate.push([a, args.reduce((prevArg: number, currArg: number) => prevArg + currArg)]);
  //let calc: number = a() + args.reduce((partialSum, a) => partialSum + a, 0);
  //let calc: number =
  //  a() +
  //  args.reduce((prevArg: number, currArg: number) => prevArg + currArg);
  //console.log(calc);
  //this.intermediate.push([a, args]);
  //return this.add(a, ...args);//.add(a, ...args);
}

/* evaluate(...args: number[]): number[] {
    // Should return result of calculating args received by add()
    console.log(this.add(1, 2, 3));
    //console.log(this.intermediate[0][1]);
    return [0]; // dummy data
  } */

// Just testing things out
const computation = new Lazy();

computation.add((a: number) => a * 2, 1, 2).add(() => 4 + 8, 2);
