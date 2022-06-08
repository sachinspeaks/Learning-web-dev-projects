/*var bird=
{
    x:100,
    y:50,
    color:"blue",
    eggs:["one","two","three","Four"]
}
for(i=0;i<bird.eggs.length;i++)
{
    console.log(bird.eggs[i])
}
bird.eggs.forEach(function(val,idx)
{
    console.log(idx,val)
});*/
function fruit(taste,color)
{
    this.color=color;
    this.taste=taste;
}
let mango=new  fruit("sweet","yellowish");
let banana=new fruit("sweet","yellowish");
let orange=new fruit("sour and sweet","orange");
var apple=
{
    color:"Red",
    taste:"Sweet",
}
console.log(apple.color,apple.taste)
//Strings
let s='Sachin'
let str=`this is ${s}'s string`
let lstr="This is \
a very long \
string"
/*console.log(str);
console.log(lstr);
console.log(lstr.length);
let stri="This is some of the data present here"
let key="some";
console.log(stri.indexOf("is",2));
let str1="This is a very long string "
let str2=str1.slice(4,18)
console.log(str2)*/
let array=[1,"ddd",true,5.6,[2,4,6,8]];
/*for(i=0;i!=array.length;i++)
{
    console.log(array[i])
}*/
//for(let val of array)
//{
//    console.log(val)
//}
////console.log(" ")
////array.push("Melon")
////for(let idx in array)
////{
////    console.log(array[idx])
////}
////array.pop()
//console.log(" ")
//for(let idx in array)
//{
//    console.log(array[idx])
//}
console.log(" ")
//array.shift()
//for(let vari of array)
//{
//    console.log(vari)
//}
let arr2=["hello","How","Are","You","Fine?"]
let arr3=["Yes","I","Am","Fine","And","Sound"];
for(let y of arr2)
{
    console.log(y)
}
console.log("This is  slice ",arr2.slice(2,5))
console.log("This is  splice ",arr2.splice(2,4))
for(let y of arr2)
{
    console.log(y)
}
