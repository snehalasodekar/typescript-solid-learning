# Liskov substitution principle
"Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program." See also [design by contract](https://en.wikipedia.org/wiki/Design_by_contract).

### Polymorphism
You might already be aware of Polymorphism, but just to remind you, here is the short summary:
If 2 different classes use **the same interface**, so they have the same function names: the code that uses this class does not care about which one class it receives.
In short: When two objects have the same interface, they are functionally interchangeable = polymorphism.

## Your mission
Look at the old.ts file and open the index.html file, refactor the Discount class in 3 different classes with the same interface "VariableDiscount" & "FixedDiscount" & "NoDiscount"

### Discuss
Do you understand what the use is of having the class NoDiscount? This prevents us from having to write extra if-statements inside product to check if we actually have a Discount dependency. It might look strange but these null or void classes are very common in a lot of popular libraries!

### Solution Implementation
- Create an Interface for assigning discount to a product.
- The Interface Discount consist of common methods or functionality like, apply discount and calculate discount.
- Separate the Discount class from old.ts to 3 different classes namely, VariableDiscount, FixedDiscount and NoDiscount.
- Import and export interface to and from discount classes and Discount Interface.
- All the Discount classes import to main ts 'liskovScript' file.
- The Product class has the discount property of type interface, 
  - that means whenever a new product added the discount applied to it using one of the discount class (variable,fixed and no) with the discount value.
  - The product price assign in while product addition will be pass to discount class using interface. (As the price is passed as parameter to the interface methods which are implemented in discount classes.)
- Add products to cart using discount classes.
  
  
    