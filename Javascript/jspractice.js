let a=10;
console.log(a);
let b=[1,4,6,2,7,9,5]
console.log(b);
let c="Lord Sachu";
console.log(c)
//js variables,arrays,functions,loops,classes,objects
c=20;
var d=30;
let e=50;
function fun()
{
    let a=5;
    if(a==5)
    {
        f=100        //scope of b is inside if block only
        console.log("inside",f)
    }
    console.log("inside",f)
}
fun();
console.log("Global",f)
function square(n)
{
    return Math.sqrt(n);
}
console.log(square(100));
console.log(square(15));
//Arrays in JavaScript

let arr=["Sachu","Simpkumar","Debu","Doggy"];
console.log(arr);
console.log(arr[2]);
console.log(arr.length)
console.log(arr["length"])
arr.push("orgyt")
console.log(arr);
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}
console.log(arr.pop())
console.log(" ")
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}
console.log(arr.indexOf("Simpkumar"));
