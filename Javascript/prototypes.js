class person{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
    isadult()
    {
        return this.age>=18
    }
}
let p1=new person("Sachu",21)
let p2=new person("Sachu",16)
//console.log(p1)
console.log(p1.__proto__==person.prototype)