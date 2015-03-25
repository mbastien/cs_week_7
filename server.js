var express = require('express');

var app = express();

app.set("view engine", "jade"); // prevent Error: No default engine

var things = [
    {id : 1, name : "Rock"},
    {id : 2, name : "Paper"},
    {id : 3, name : "Scissors"}
];

app.get("/", function(req, res){ // request, response
    res.render("index");
    
});

app.get("/things", function(req, res){ // request, response
    console.log("received request : " + req);
    //res.send("<html><body><h1>hello world.  rand = " + Math.random() + "</h1></body></html>");
    res.render("things", { xmessage : "Hello World" , things : things});
    
});

app.get("/things/:id", function(req, res){ // request, response
    var thing;
    for(var i = 0; i < things.length; i++){
        if(req.params.id == things[i].id){
            thing = things[i];
            break;
        };
    };
    res.render("thing", { xmessage : "Hello World" , thing : thing});
    
});

app.listen(process.env.PORT);