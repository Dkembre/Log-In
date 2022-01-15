var database = [
    {
        username: "andrei",
        password: "supersecret"
    },
    {
        username: "sally",
        password: "123"
    },
    {
        username: "ingrid",
        password: "777"
    }
]

var newsfeed = [
    {
        username: "bobby",
        timeline: "so tired from all that learning."
    },
    {
        username: "sally",
        timeline: "Javascript soooo cool!"
    },
    {
        username:"mitch",
        timeline: "This is tiring"
    }
];
function isUserValid(username, password) {
    for (var i=0; i < database.length; i++){
        if(database[i].username === username &&
            database[i].password === password){
            return true;
    }
} return false;
  
}
function signIn(username, password) {
   if (isUserValid(username, password)) {
        console.log(newsfeed);
    } else {
        alert("Sorry, wrong username and password");
    }

}    


var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("what is your password?");

signIn(userNamePrompt, passwordPrompt);