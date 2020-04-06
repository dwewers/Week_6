function add(a, b){
    return a + b
}
add(5, 10)

//arguments are the value you pass in
//parameters are the named variables inside the function
//that will recieve 

function sub(x, y){
    return x - y
}
sub(10, 5)

// function foo(z = 3){
//     console.log(z);
// }
// foo()

function example(a , b , c){
    return (a + b + c)
}
example (10 , 5 , 3)
console.log('example =' = example.length);

// If (example.length == 1){
//     return example(a - b - c);
// }

function foof(x , y = 1){
    return console.log(x)
}
foof.length

function hello(u , i , o){
    return console.log(arguments.length)
}
run(10 , 20 , 30)


//in our own words explain length property of a function and length property of arguements arguements (in diary for lab 4)

// funtion dot(...args) {
//     console.log(args[3])
// }
// var arr =[1, 2, 3, 4, 5]

// dot(... arr)

function foo(...args){
    console.log(args[3])
}
var arr = [1, 2, 3, 4, 5]
foo(...arr)