// TODO: Fix the errors in the functions below!

const functions = {
  sum(a, b) {
    if (typeof a !== "number" || typeof b !== "number"){
      throw new Error("Pas un nombre");
    }
    else{
      return a+b;
    }
    
    // Todo use typeof and throw
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
  },

  doubleNumbersInArray: function doubleNumbersInArray(array) {
    // Todo: use Array/map
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    const double = function (x) {
      return x * 2
    };
    return array.map(double);
  },

  checkForBadWords(input) {
    // Todo: use Array/forEach and throw
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    let grosMot = ['merde'];
    grosMot.forEach(element => {
        if (input.includes(element)){
          throw new Error("Gros mot");
        }
    });
  },

  nameOfWeekDay(index) {
    const jours = ['Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    return jours[index];
  },

  sortNumbers(array) {
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    function compareNumbers(a, b) {
      return a - b;
    }
    return array.sort(compareNumbers);
  },

  createCounterFunction(input) {

    return ()=>{
      input++;
      return input;
    };
  },

  createHelloMessage(name) {
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
  return `Hello ${name}. Are you well?`;
  },

  callTheCallback(callback) {
    // Docs: https://developer.mozilla.org/en-US/docs/Glossary/Callback_function pas ;cc ENZO <3
    return callback(1,2);
  },

  combineArrays(a1, a2) {
    const a = a1.concat(a2);
    
    return a;

  },

  promiseMeMoney() {
    return "send message";
  },
};

module.exports = functions;
