// Get all the countries from the Asia continent / region using the Filter function

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function() {
  var data = request.response;
  var result = (JSON.parse(data));
  var result1 = result.filter((element) => element.region === "Asia");
  var ans = result1.map((element) => element.name.common);
  console.log(`Asian continental countries are : ${ans}`);
};




// Print the total population of countries using reduce function;

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function() {
  var data = request.response;
  var result = JSON.parse(data);
  var ans = result.reduce((acc, cv) => acc + cv.population, 0);
  console.log(`The total population of all the countries are ${ans}`);
};


// Print the following details name, capital, flag using forEach function

var request = new XMLHttpRequest;
 request.open("GET","https://restcountries.com/v3.1/all");
 request.send();
 request.onload=function(){
  var data = request.response;
  var result = JSON.parse(data);
   var ans = result.forEach((ele)=>console.log("NAME:"+ele.name.common+",.","CAPITAL:"+ele.capital+",.","FLAG:"+ele.flag+"."))
        };



// Get all the countries with a population of less than 2 lakhs using Filter function

var request = new XMLHttpRequest;
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
  var data = request.response;
  var result = JSON.parse(data);
  var ans = result.filter((element)=>element.population<200000)
  var ans1 = ans.map((element)=>element.name.common)
  console.log(`The countries with a population of less than 2 lakhs : ${ans1}`)
};

// Print the country which uses US Dollars as currency.

var request = new XMLHttpRequest;
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
  var data = request.response;
  var result = JSON.parse(data);
  var ans = result.filter((element) => {
    for (var res in element.currencies) {
      if (element.currencies[res].code === "USD") {
        console.log(`The country which uses US Dollars as currency : ${ans} ${element.name}`);
      }
    }
  });
};