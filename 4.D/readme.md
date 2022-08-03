# Dependency inversion principle

At its heart, the DIP is about structure. The manner in which you structure your program entities, and the way in which they interact with one another, has a direct impact on your ability to conform to the rest of the SOLID principles (the benefits of which we have discussed previously.) If your dependencies are mismanaged, then the likelihood of your code being flexible, maintainable, and reusable is drastically diminished.

## Story time

The Restaurant class depends on usage of its Oven object. What if we wanted to make a restaurant that uses a different kind of cooking instrument? As currently implemented, we couldn’t do so without going into the Restaurant class and making changes, which would violate the Open/Closed Principle.
    Changes to the Oven object have the potential to cascade through the program and break the Restaurant class’ Cook method. For example, what if we decided that we wanted to make our ovens electric rather than gas and changed the LightGas and ExtinguishGas method names? Doing so would effectively break Restaurant because it relies on using those Oven methods as currently named.
    The coupling between Restaurant and Oven reduces portability, meaning that we can’t re-use Restaurant in another location without bringing Oven with it. (Even if the other program never uses Oven.)



