function add(numbers)
{
    var numberArray = numbers.split(/[,\n]/);

    if(numberArray[0].includes("//"))
    { 
      var delimeter = numberArray[0].substring(2);
      var re = new RegExp("(?: |" + delimeter + "|\\n)+");
      numberArray = numberArray[1].split(re);
    } 
    negativeNumbers(numberArray);
    return sum(numberArray);
}

function sum(numberArray)
{
  var total = 0;
    for(var i = 0; i < numberArray.length; i++)
    {
      if(parseInt(numberArray[i]) < 1000)
      {
        total += parseInt(numberArray[i]);
      }
    }
    return total;
}

function negativeNumbers(numberArray)
{
  var negNumbers = [];
    for(var i = 0; i < numberArray.length; i++)
    {
      if(parseInt(numberArray[i]) < 0)
      {
        negNumbers.push(numberArray[i]);
      }
    }
    if(negNumbers.length > 0)
    {
      throw new Error("Negatives not allowed:" + negNumbers);
    }
}
module.exports = add;