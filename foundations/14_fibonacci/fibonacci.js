// const fibonacci = function(n) {
//   n = Number(n); 

//   if (n < 0) return "OOPS";
//   if (n === 0) return 0;
//   if (n === 1) return 1;

//   let a = 1;
//   let b = 1

//   for (let i = 3; i < n; i++) {
//     let next = a + b;
//     a = b;
//     b = next
//   }

//   return b
// };



function fibonacci(n){
  n = Number(n);
  if(n < 0) return "OOPS";
  if(n === 0) return 0;
   if (n === 1) return 1;

  let arr = [1, 1];

  for(let i = 2; i < n; i++){
    arr.push(arr[i - 1] + arr[i - 2])
  }
  return arr[n - 1]
}




module.exports = fibonacci;