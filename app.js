var Express             = require("express");
var App                 = Express();

App.get('/', function(request, response) {
    function add(a ,b) {
        let sum = 0;
    
        sum = a + b + 5;
        return sum;
    }
    
    const a = 5;
    const b = 10;
    
    const result = add(a, b);

   response.send("<h1>" + a + " + " + b + " is " + result + "</h1>");
})

App.listen(3000, function() {});