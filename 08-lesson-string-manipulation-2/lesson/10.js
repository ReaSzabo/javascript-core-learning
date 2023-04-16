
// Bármilyen karakter mentén darabolhatunk:
var string1 = "Itt space mentén fogunk darabolni";
var array1 = string1.split(" ");
console.log(array1); // [Itt, space, mentén, fogunk, darabolni]

var string2 = "Itt,vessző,mentén,fogunk,darabolni";
var array2 = string2.split(",");
console.log(array2); // [Itt, vessző, mentén, fogunk, darabolni]

var string3 = "Itt;pontosvessző;mentén;fogunk;darabolni";
var array3 = string3.split(";");
console.log(array3); // [Itt, pontosvessző, mentén, fogunk, darabolni]

var string4 = "Itt:kettőspont:mentén:fogunk:darabolni";
var array4 = string4.split(":");
console.log(array4); // [Itt, kettőspont, mentén, fogunk, darabolni]

