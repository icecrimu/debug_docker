var Express             = require("express");
var App                 = Express();

App.get('/', function(request, response) {
    function add(a ,b) {
        let sum = 0;
    
        sum = a + b + 5;
        return sum;
    }
    
    const firstvalue = 5;
    const secondValue = 10;
    
    const result = add(firstvalue, secondValue);

   response.send("<h1>" + firstvalue + " + " + secondValue + " is " + result + "</h1>");
})

App.listen(3000, function() {});