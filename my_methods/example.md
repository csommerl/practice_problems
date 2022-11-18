From https://launchschool.com/books/javascript/read/objects#objectsvsprimitives

```js
Array.prototype.push = function(newValue) {
  this[this.length] = newValue;
}

let array = [1, 2, 3];
array.push(4);
```

```js
Array.prototype.forEach = function(callback) {
  for (let index = 0; index < this.length; index += 1) {
    callback(this[index]);
  }
}

let array = [1, 2, 3];
array.forEach(function callback(value) { console.log(value); })
```