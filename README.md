## Required Tasks

```
Create a function that implements partial sum
```

```
sum(const 1 )( addOne = sum( 2 ); // 3 1 );
addOne(const addTen = sum( 2 ); // 3 10 );
addTen(addOne( 24 ); ); // 12// 5
addTen( 10 ); // 20
```

Here is the [solution](1_partial_sum.js)

```
Write a function redundant that takes in a string str and returns a function that returns str.
```

```
const//f1() ➞ "apple" f1 = redundant( "apple");

const f2 = redundant("pear");
//f2() ➞ "pear"

const//f3() ➞ ""

f3 = redundant("");
```

Here is the [solution](2_redundant.js)

```
Write a function that returns an anonymous function, which transforms its input by adding a particular suffix at the end.
```

```
add_ly = add_suffix( "ly");
add_ly(add_ly("hopeless""total"); ); // "totally"// "hopelessly"
(^) add_less = add_suffix("less");
(^) add_less("fear"); // "fearless"
add_less("ruth"); // "ruthless"
```

Here is the [solution](3_suffix.js)

```
Create a function printAfter that calls its argument after printing hello world
const print = () => console.log("Elon Musk")
```

Here is the [solution](4_print_after.js)

```
Write a function that implements filtering in array
```

```
constfilterFalsyValues(values); values = [null, true, {}, { // [true, {}, { name: "Elon" }];name: "Elon" }, "", NaN, 0 ];
filterFalsyValues(["hello", 1233 , []]); // ['hello', 1233, []]
```

Here is the [solution](5_filter_falsy_values.js)

```
Write a function which remove elements with length <= 3
```

```
filterByLength(['mercedes'] "kia", "tesla", "bmw", "mercedes"]); // ['tesla',
```

Here is the [solution](6_filter_by_length.js)

```
Given an array. Determine whether it consists only from uniques or not.
```

Here is the [solution](7_unique.js)

```
Determine if a word or phrase is an isogram. An isogram (also known as a "non pattern word") is a
word or phrase without a repeating letter
```

Here is the [solution](8_isogram.js)
