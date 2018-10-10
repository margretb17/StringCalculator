function add(numbers)
{
    //split the array for , and \n
    var numberArray = numbers.split(/[,\n]/);

    //if at index 0 the array has // then 
    //we know there is a new delimeter
    if(numberArray[0].includes("//"))
    { 
      //the index starts at 0 and our delimeter begins at index 2
      var delimeter = numberArray[0].substring(2);
      //allowing a new delimeter
      var re = new RegExp("(?: |" + delimeter + "|\\n)+");
      //split used to split a string into an array of substrings
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
      //if the number is smaller than 1000 
      //add it to our total variable
      if(parseInt(numberArray[i]) < 1000)
      {
        total += parseInt(numberArray[i]);
      }
    }
    return total;
}

//is a number in the array negative
function negativeNumbers(numberArray)
{
  var negNumbers = [];
    for(var i = 0; i < numberArray.length; i++)
    {
      //if the number is smaller than 0 
      //then push it to the negNumbers array
      if(parseInt(numberArray[i]) < 0)
      {
        negNumbers.push(numberArray[i]);
      }
    }
    //throw an error and return the negative number/s
    if(negNumbers.length > 0)
    {
      throw new Error("Negatives not allowed:" + negNumbers);
    }
}
module.exports = add;