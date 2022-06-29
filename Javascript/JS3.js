/* function fakedownload(done)
{
    setTimeout(function (){
        let downloaddata="Some data we ripped of the interwebs"
        done(downloaddata)
    },1000)
}
fakedownload(function(data){
    console.log("We downloaded a file, which had this data -->")
    console.log(data)
}) */
/* const v=10
let a=20
var t=30
console.log(v)
console.log(++a)
console.log(++t) */
/* 
function temp()
{
    const b=50
    console.log(b)
    if(true)
    {
       const b=88
       console.log(b) 
    }
    console.log(b)
}
 */
/* function x()
{
    var a=7;
    function y()
    {
        console.log(a);
    }
    y();
}
x(); */
/* var quid="Harry Potter";

function changewinner(winner)
{
    winner="Draco"
}
console.log("The winner was "+quid);
changewinner(quid);
console.log("Now the winner is "+quid); */
/* var i=1
function print()
{
    console.log("test function " + i)
    i++;
}
// console.log("And the wait starts ....")
// setTimeout(print,5000)
setInterval(print,1000); */

/* var intervalid;
var count =0;
function test()
{
    if(count==5)
    {
        clearInterval(intervalid);
    }
    console.log("Hello Broda");
    count++;
}
console.log("Ans its starting ");
intervalid=setInterval(test,500); */

/* function sayhello()
{
    console.log("Hello")
}
sayhello();

//Another way of calling sayhello
(function sayhello()
{
    console.log("Hello")
})(); */

/* (function testing()
{
    var a=10;
    var b=20;
    console.log(a+b);
})();
console.log(a+b); */

/* let a=10
function hoi()
{
    a=20;
    console.log("inside "+a);
}
hoi();
console.log("outside"+a); */

/* if(true)
{
    var a=101;
}
console.log(a); */

/* function math()
{
    console.log("3^4 = "+Math.pow(3,4))
    console.log("4^3 = "+Math.pow(4,3))
    console.log("Root(2) = "+Math.sqrt(2))
    console.log("Sin(10) = "+Math.sin(10))
}
math(); */

/* (function (a,b,c,d)
{
    a("3^4 = "+b(3,4))
    a("4^3 = "+b(4,3))
    a("Root(2) = "+c(2))
    a("Sin(10) = "+d(10))
})(console.log,Math.pow,Math.sqrt,Math.sin); */

/* for(i=0;i<10;i++)
{
    setTimeout(function()
    {
        console.log(i);
    },100)
} */

/* for(i=0;i<10;i++)
{
    (function (j)
    {
        setTimeout(function()
        {
            console.log(j)
        },10000)
    })(i);
}
 */
/* 
function fakedownload(done)
{
    setTimeout(function(){
        let downloaddata="Some data we ripped from the internet"
        done(downloaddata)
    },2000)
}
fakedownload(function(data){
    console.log("We download a file which had this data -->")
    console.log(data)    
}) */

/* function fakedownloadpromise()
{
    return new Promise(function(resolve,reject)
    {
        setTimeout(function(){
            let downloaddata="Some data from net "
            
        })
    })
}

let p=new Promise((resolve,reject)=>{
    let t=1+1;
    if(t==5)
    {
        resolve("Success")
    }
    else
    {
        reject("Failed")
    }
})
p.then((message)=>
{
    console.log("Operation was "+message)
}).catch((message)=>
{
    console.log("Operation was "+message)
}) */
/* 
function fakedownloadpromise(correct)
{
    return new Promise(function (resolve,reject){
        setTimeout(function(){
            let downloaddata="Some Random data from net "
            if(correct)
            {
                resolve(downloaddata)
            }
            else
            {
                reject(("Could not download coz your wifi is off"))
            }
        },1000)
    }); 
}
fakedownloadpromise(false).then(function(data){
    console.log("The data which we downloaded was ")
    console.log(data)
}).catch(function(err){
    console.log(err)
}) */

/* var foo = 'I am GLOBAL foo.';

if ( true ) { var foo = 'I am GLOBAL foo TOO.'; }

console.log( foo );

function test() { var foo = 'I am LOCAL foo.'; }

test();

console.log( foo ); */
// (function()
// {
//     console.log("ghsfvj")
// })()



