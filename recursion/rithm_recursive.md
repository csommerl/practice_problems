# Recursion Exercise

Sources:
- https://github.com/rithmschool/javascript_computer_science_exercises/blob/master/recursion_exercise/readme.md
- https://www.rithmschool.com/courses/javascript-computer-science-fundamentals/recursion-exercises

## Getting started

For this exercise you **MUST** use recursion to solve these problems. Some of them can be done without, but it is essential that you practice recursion and make the tests pass. 

- Write a function called `productOfArray` which takes in an array of numbers and returns the product of them all

```javascript
productOfArray([1,2,3]) // 6
productOfArray([1,2,3,10]) // 60
```

- Write a function called `contains` that searches for a value in a nested object. It returns true if the object contains that value.

```javascript
var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44
                    }
                }
            }
        }
    }
}

contains(nestedObject, 44) // true
contains(nestedObject, "foo") // false
```

Complete the following CodeWars problems:

- [https://www.codewars.com/kata/the-real-size-of-a-multi-dimensional-array/train/javascript](https://www.codewars.com/kata/the-real-size-of-a-multi-dimensional-array/train/javascript)
- [https://www.codewars.com/kata/sum-squares-of-numbers-in-list-that-may-contain-more-lists/train/javascript](https://www.codewars.com/kata/sum-squares-of-numbers-in-list-that-may-contain-more-lists/train/javascript)
- [https://www.codewars.com/kata/recursive-replication](https://www.codewars.com/kata/recursive-replication)

**BONUS**

- Write a function called search that finds a value in an array and returns the index where the value is at. If the value is not found, the function should return negative 1.

```javascript
search([1,2,3,4,5],5) // 4
search([1,2,3,4,5],15) // -1
```

- Refactor your search function to use a faster algorithm called binary search [https://www.youtube.com/watch?v=JQhciTuD3E8](https://www.youtube.com/watch?v=JQhciTuD3E8). 

```javascript
binarySearch([1,2,3,4,5],5) // 4
binarySearch([1,2,3,4,5],15) // -1
```

- Write a function called `stringifyNumbers` which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!

```javascript
var obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
stringifyNumbers()
/*/
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
/*/
```

Complete [this](https://www.codewars.com/kata/mutual-recursion/train/javascript) codewars problem!

# Part 2: Reimplementing document methods using recursion

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div class="row main sidepane">
        <h1>
            <p class="row foo"></p>
            <div class="row main sidepane">
                <h2>
                    <div class="row test">1</div>
                </h2>
            </div>
        </h1>
    </div>
    <div class="row">
        <div class="main">
            <h2 class="row">
                <div id="foo" class="row main sidepane">
                    2
                </div>
            </h2>
        </div>
    </div>
    <div class="row"></div>
</body>
</html>
```

1. Given the following HTML, if you needed to select an element that has an ID of foo, you could use the document.getElementById method. Try to implement that function on your own! Here are some hints:
- Use helper method recursion, it will be much easier!
- In your outer function, store a variable that will either be the element found or null if the element can not be found.
- In your inner function, iterate over an elements children and if you find the correct.
- Invoke your inner function and pass in document.body.children so you start from the root of the DOM.

2. Given the following HTML, if you needed to select all of the elements that are a div, you could use the document.getElementsByTagName method. Try to implement that function on your own! Here are some hints:
- The code will be VERY similar to your previous method except you will be returning an array and not checking for the same id, but another property.

3. Now given the following HTML, if you needed to select all of the elements that have a class of row, you could use the document.getElementsByClassName method. Try to implement that function on your own! Here are some hints:
- The code will be VERY similar to your previous method except you will be checking to see if an element contains a class (research classList and you will find a convenient method).
