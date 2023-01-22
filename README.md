## To use
* npm install
* npm run build
* npm start
* npm test

Entry point file is **src/app.ts**

# Instructions
Lazy evaluation is an evaluation strategy which delays the evaluation of an expression
until its value is needed.

The challenge is for you to implement Lazy. The requirements of Lazy and the
specification of its interface follows.

**Lazy()**

Constructor. Creates a new instance of a Lazy which models a lazy computation.
A Lazy instance has two methods detailed below.

    add(fn[, arg1, arg2, ...])

Adds a function to the chain of functions to be evaluated at a later stage.

* The add function can receive an arbitrary number of arguments.
* The first argument to add is a function.
* When the function is called it will be called with the remaining arguments supplied
to add (if any) followed by a single argument that will be an item from the target
array supplied to evaluate.
* You should be able to chain together calls to add and evaluate (see complete
example below).
* Don't be defensive about the degenerate cases (E.g. bad / missing arguments).

Example usage with a simple function with no extra arguments:

    lazy.add(Math.sqrt);

Example usage with function expecting several arguments and some arguments to
provide when called:

```
lazy.add(function plus(a, b) { return a + b; }, 1);
evaluate(target)
```

* Returns an array containing the result of applying the chain of functions to the
array target.
* The functions should be applied in the order they were added to the Lazy instance.
* Assume that add was called at least once (I.e. don't account for the case where the
Lazy instance had no functions added to it).

* Don't be defensive about the degenerate cases (E.g. bad / missing arguments).

Example usage:

    lazy.evaluate([ 1, 2, 3 ]);

Putting it altogether: A complete example of usage
````
const computation = new Lazy();
computation
.add(function timesTwo(a) { return a * 2; }) // simple function .add(function
plus(a, b) { return a + b; }, 1) // a plus function that will be given 1 as its first
argument
.evaluate([1, 2, 3]);
// returns [3, 5, 7]
````