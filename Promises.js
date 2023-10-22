
let countValue = new Promise(function (resolve, reject) {
    reject('Promise rejected'); 
 });
 
 countValue.then(
     function successValue(result) {
         console.log(result);
     },
  )
 .catch(
     function errorValue(result) {
         console.log(result);
     }
 );