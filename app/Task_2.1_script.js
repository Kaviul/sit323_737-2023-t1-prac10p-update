var express = require("express");
 var app = express();

const Port = 1336;


// console.log("check")

let users = [{id : 1, name : "Samia"}, {id : 2, name : "Samira"}, {id : 3, name : "Niloy"}, {id : 4, name : "George"}, {id: 5, name: "Kaviul"}, 
{id: 6, name: "hossain"} ]


//app.use(express.static(__dirname+'/public'))

app.get('/', (req, res) => {
    res.send("Welcome! This is the modified version of the code!")
})

app.get("/users", (req, res) => {
    res.json(users)
})

app.get('/users/:id', (req,res) => {
    console.log("The user with ID" + " " + req.params.id + " "+ "found!");
    var user_id = req.params.id;
    var userFound = false;

    users.forEach((user, idx) => {
        if (user.id == user_id){
            res.send(users[idx]);
            userFound = true;
        }

    })

        if (userFound == false) {
            res.send('No user exists with that ID. Sorry!');
            console.log('No user exists with that ID. Sorry!')
        } 

    })


app.listen(Port, () => {
    console.log('Database is up at:', Port)
})



