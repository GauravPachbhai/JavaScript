const mySym = Symbol("key1");
const JsUser = {
    name:"Gaurav",
    "full name":"Gaurav Pachbhai",
    [mySym]:"mykey1", //Symbol declaration
    age:18,
    location:"Pune",
    email:"gaurav@google.com",
    isLogged:false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// JsUser.email = "Gaurav@yahoo.com";
// Object.freeze(JsUser)
// JsUser.email = "Gaurav@microsoft.com"
// console.log(JsUser)

JsUser.getGreeting = function(){
    console.log("Hello JS user");
    return "hello"
}

console.log(JsUser.getGreeting())
