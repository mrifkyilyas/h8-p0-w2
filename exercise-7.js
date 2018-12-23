//1. Menyusun Barisan Bintang
console.log('')
console.log('1. Menyusun Barisan Bintang')
console.log('')
var rows1 = 5;
for(var i=0; i < rows1; i++ ){
    console.log('*');
}

console.log('')
//2. Menyusun Barisan Bintang Dengan Nested Looping
console.log('2. Menyusun Barisan Bintang Dengan Nested Looping');
console.log('')
var rows2 = 5;
for(var i=0; i <rows2; i++ ){
var bintang=""   
    for(var j=0; j<rows2; j++){
    bintang += '*'
    }
   console.log(bintang) 
}

console.log('')
//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
console.log('3. Menyusun Barisan Tangga Bintang Dengan Nested Looping')
console.log('')
var rows3 = 5;

for(var i=0; i<rows3; i++){
  var bintang= "" 
  for(var j=0; j<=i; j++){
       
      bintang += '*'     
    }
      console.log(bintang) 
}