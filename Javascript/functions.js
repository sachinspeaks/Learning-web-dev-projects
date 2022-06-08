function alpha()
{
    return "A"
}
function beta()
{
    return "D"
}
function area(height,width)
{
    if(!width)
    {
        return Math.PI*height*height
    }
    return height*width
}
function hello()
{
   console.log("Hello my boy "+arguments[0]+" "+arguments[1])
}