function isLucky(n) {
  //array must be global in order to push all values into the same array
  var sum = [];
  
  //var that turns input into string so it can be iterated through
  var num = n.toString().split('');
  var num2 = [];
  var total = [];
  var total2 = [];
  

  
  for (var k = 0; k < num.length; k++) {
    total.push(num[k]);
  }
  //turn strings back into numbers
  for (var l = 0; l < total.length; l++) {
    total2.push(parseInt(total[l]));
  }

  var total3 = total2.reduce(add, 0);

  function added(a, b) {
    return a + b;
  }

  for (var i = 0; i < num.length / 2; i++) {
    sum.push(num[i]);
  }
  
  
  //turn strings back into numbers
  for (var j = 0; j < sum.length; j++) {
    num2.push(parseInt(sum[j]));
  }

  var num3 = num2.reduce(add, 0);

  function add(a, b) {
    return a + b;
  }
  
 if (num3===total3/2){
   
   return true;
 }
 
 else{
   
   return false;
 }
 
}

isLucky(1230);
