// TODO: Fix the errors in the functions below!

const functions = {
  // Computes the total order of a command
  // Rule: if total order is > 1000 the shipping is free
  orderTotal(order) {
    if (!order || !order.items || order.items.length === 0) {
      return 0;
    }
    let totalNormalItems = 0;
    order.items.forEach((el) => {
      if (el.name === 'Tax') return false;
      const itemPrice = el.price || 0;
      const itemQuantity = el.quantity || 1;
      totalNormalItems += itemPrice * itemQuantity;
    });
    if (totalNormalItems <= 1000) totalNormalItems += 40;
    return totalNormalItems;
  },

  addPositive(array) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
    if (array.length === 0) return 0;
    let sum = 0;
    array
      .filter((el) => Number(el) > 0)
      .forEach((el) => {
        sum += Number(el);
      });
    return sum;
  },

  // Takes a string, find the first consecutively repeating character in it and return the last index of the repeated character. If there are no repeating characters, return -1. This function should ignore any spaces and should be case insensitive - treat 'a' as eqivalent to 'A'
  repeatingCharacter(string) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
    let lastCharacter = '';
    for (let i = 0; i < string.length - 1; i++) {
      if (string[i] == ' ') continue;
      else if (string[i].toUpperCase() === lastCharacter.toUpperCase())
        return i;
      lastCharacter = string[i];
    }
    return -1;
  },

  // Takes an array of 1's and 0's, find the maximum number of consecutive 1's
  // in this array. If there is any value other than 1 or 0 in the array,
  // this is an error, return -1. The 1's and 0's may be either string or
  // integer values, both are acceptable and should be considered equivalent
  maxOneNumber(array) {
    let maxCount = -1;
    let currentCount = -1;

    if (array.find((el) => Number(el) !== 0 && Number(el) !== 1) !== undefined)
      return -1;

    array.forEach((el) => {
      const elNumber = Number(el);
      if (elNumber === 1) {
        currentCount++;
        maxCount = Math.max(currentCount, maxCount);
      } else currentCount = 0;
    });

    return maxCount;
  },
};

module.exports = functions;
