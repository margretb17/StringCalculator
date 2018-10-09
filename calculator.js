function add(numbers)
{
  if(numbers == "")
  return 0;

  if(numbers.includes(","))
  {
    var numberArray = numbers.split(",")
    return sum(numberArray);
  }
  else if(numbers.includes("\n"))
  {
    var numberArray = numbers.split("\n");
    return sum(numberArray);
  }
  else if(numbers.includes("\n") || numbers.includes(","))
  {
    var numberArray = numbers.split("\n") || numbers.split(",");
    return sum(numberArray);
  }
  else
    return parseInt(numbers);
}

function sum(numberArray)
{
  var total = 0;
    for(var i = 0; i < numberArray.length; i++)
    {
      total += parseInt(numberArray[i]);
    }
    return total;
}
module.exports = add;