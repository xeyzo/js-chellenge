//array mutator
// PUSH
const dataMutat = [1, 2, 3, 4, 5, 6];
dataMutat.push = (7)
console.log(dataMutat + " = Mutator");

// REVERSE
const dataRever = ["d", "b", "a", "c"];
dataRever.reverse()
console.log(dataRever + " = Reverse")

// array accessor
// CONCAT
const data1 = [1, 2, 3, 4, 5];
const data2 = [6, 7];

const allData = data1.concat(data2);
console.log(allData + " = Concat")

// INCLUDE
const sayur = ['bayam', 'kangkung', 'waluh']
const sayurBayam = sayur.includes('bayam')

console.log(sayurBayam + " = includes")

// array iteration
// FILTER

var numbers = [1, 40, 12, 13, 62, 37];
var dataFilter = numbers.filter(filterNumber);

function filterNumber(value, index, array) {
  return value > 21;
}

console.log(dataFilter + " = Filter")

// REDUCE
var number = [2, 2 , 3 , 6 , 7 , 8 ];
var jumlahData = number.reduce(totalData);

function totalData(total, value, index, array) {
  return total + value;
}

console.log(jumlahData + " = Reduce")