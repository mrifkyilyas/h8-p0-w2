function xo(str) {
    // you can only write your code here!
    
    var countX = 0;
    var countY = 0;
    
    for(var i=0;i<str.length;i++){
      if (str[i]==='x'){
        countX++;
      }else{
        countY++;
      }
    }
    return countX===countY;
    
  }
// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true