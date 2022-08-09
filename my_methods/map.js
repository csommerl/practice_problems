// eslint-disable-next-line no-extend-native
Array.prototype.myMap = function(callback) {
  const resultArr = [];

  for (let index = 0; index < this.length; ++index) {
    const element = this[index];
    if (callback(element, index, this)) {
      resultArr.push(element);
    }
  }

  return resultArr;
};

console.log([1, 2, 3, 4, 5].myMap((elem) => {
  return elem > 3;
}));

console.log([1, 2, 3, 4, 5].myMap((_, idx) => {
  return idx % 2;
}));