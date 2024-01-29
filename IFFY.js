//There might be problem in globle scope variable, to prevent it we use IIFY
//Immediately Invoked Function Expression (TTFE)

(function test(){
    console.log("DB Connected");
})();

((name)=> {
    console.log(name);
})('Gaurav');