String.prototype.mySplit = function(separator){
  const stringSep = String(separator);
  const stringThis = String(this);
  const result = [];
  
  if(stringSep === 'undefined' || stringSep === '[object Object]'){
      return [stringThis];
  }

  if (stringSep === '') return Array.from(stringThis);

  const startSplit = (str, i) => {
    if (i >= stringThis.length) return;
    const index = str.indexOf(stringSep);
    if (index >= 0) {
      result.push(str.substring(0, index));
      startSplit(str.substring(index + stringSep.length), index + stringSep.length);
    } else {
      result.push(str);
    }
  }
  startSplit(stringThis, 0);
  return result;
}

const str = 'H1,2ell[]o, my ntrueundefinedame null i{}s .2..';

console.log('empty', str.split());
console.log('empty', str.mySplit());
console.log('undefined', str.split(undefined));
console.log('undefined', str.mySplit(undefined));
console.log('{}', str.split({}));
console.log('{}', str.mySplit({}));


console.log('[]', str.split([]));
console.log('[]', str.mySplit([]));
console.log('empty string', str.split(''));
console.log('empty string', str.mySplit(''));


console.log('[1, 2]', str.split([1, 2]));
console.log('[1, 2]', str.mySplit([1, 2]));
console.log('null', str.split(null));
console.log('null', str.mySplit(null));
console.log('true', str.split(true));
console.log('true', str.mySplit(true));
console.log('3', str.split(3));
console.log('3', str.mySplit(3));
console.log('2', str.split(2));
console.log('2', str.mySplit(2));
console.log('" "', str.split(' '));
console.log('" "', str.mySplit(' '));


console.log('/\s/', str.split(/\s/));
console.log('/\s/', str.mySplit(/\s/));

