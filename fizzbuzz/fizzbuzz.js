function fizzbuzz(n) {
  
  let result = '';
  if(n % 3 === 0)
  {
    result += "fizz";
  }
  if(n % 5 === 0)
  {
    result += "buzz";
  }
  if(result !== '')
  {
    return result;
  }
  return n.toString();
}
module.exports = fizzbuzz;