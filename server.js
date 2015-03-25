var express = require('express');

var app = express();

app.set("view engine", "jade"); // prevent Error: No default engine

var things = [
    {id : 1, name : "Rock"},
    {id : 2, name : "Paper"},
    {id : 3, name : "Scissors"}
];

var people = [
    {id : 1, name : "Larry"},
    {id : 2, name : "Curly"},
    {id : 3, name : "Moe"}
];

app.locals.pretty = true; // make source pretty

app.get("/", function(req, res){ // request, response
    res.render("index");
    
});

app.get("/things", function(req, res){ // request, response
    console.log("received request : " + req);
    //res.send("<html><body><h1>hello world.  rand = " + Math.random() + "</h1></body></html>");
    res.render("things", { xmessage : "Hello World" , things : things, tab : "things"});
    
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

app.get("/people", function(req, res){ // request, response
    console.log("received request : " + req);
    //res.send("<html><body><h1>hello world.  rand = " + Math.random() + "</h1></body></html>");
    res.render("people", { things : people, tab : "people"});
    
});

app.get("/people/:id", function(req, res){ // request, response
    var person;
    for(var i = 0; i < things.length; i++){
        if(req.params.id == people[i].id){
            person = people[i];
            break;
        };
    };
    res.render("person", { thing : person});
    
});

app.listen(process.env.PORT);