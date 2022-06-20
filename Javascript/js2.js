//function outer(arg1)
//{
//    console.log(arguments[0]);
//    console.log(arguments[1]);
//    console.log(arg1);
//    
//}
//outer("Huihuihui","Aabrakadabra")
//console.log(this)
function test()
{
    console.log(this)
}
test();
let obj=
{
    a:1234,
    b:"string",
    c:true,
    d:function()
    {
        console.log(this)
    },
    e:
    {
        g:145,
        h:"another string",
        p:false,
        m: function()
        {
            console.log(this)
        },
    },
}
let t=obj.d;
let obj2=Object.create(obj);
//s1='hello,there /"I am sachu"';
console.log(obj==obj2)
console.log(obj2.a)
obj2.j="hui";
obj2.k="huihui";
obj2.l="huihuihui";
let obj3=Object.create(obj2);
obj2.a++;
console.log(obj3.a)