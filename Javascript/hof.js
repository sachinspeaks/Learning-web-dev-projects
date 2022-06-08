function greeter(greeting)
{
    function greet(name)
    {
        console.log(greeting,name())
        console.log(arguments[1])
    }
    return greet
}
function getname()
{
    return document.getElementById('namebox').value
}
let g1=greeter("Good mornin")
let g2=greeter("Good evenin")
console.log(g1("sachu"))
console.log(g1("Vroi"))
console.log(g2("sachu"))
console.log(g2("vroi"))