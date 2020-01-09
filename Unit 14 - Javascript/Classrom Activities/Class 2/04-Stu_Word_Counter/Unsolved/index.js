var inputstring = "sl kdj vince lsls lsls am a am ah haha ah vince vince vince vince";

var inputarray = inputstring.split(" ");

//var count = 1;

var result = {};

inputarray.forEach(function(word) {
    if (word in result) {
        result[word]+=1;
        //result[word] = count;
    }
    else {
        //count = 1;
        result[word] = 1;
    };
});

console.log(result);
console.log(inputarray)