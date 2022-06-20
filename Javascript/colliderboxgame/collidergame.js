var paintbox = document.getElementById('paintbox')
var pen = paintbox.getContext("2d")

let gameon=true;

class Box
{
    constructor(size,color)
    {
        this.size=size
        this.color=color
        this.x=0
        this.y=0
    }
}
class  Player extends Box
{
    constructor()
    {
        super(50,'blue')
        this.x=0
        this.y=225
        this.speed=0
    }
    move()
    {
        this.x+=this.speed
    }

}
class  enemy extends Box
{
    constructor(speed)
    {
        super(50,'red')
        this.speed=speed
    }
    move()
    {
        this.y+=this.speed
        if(this.y+this.size>500)
        {
            this.speed=-Math.abs(this.speed)
        }
        if(this.y<0)
        {
            this.speed=Math.abs(this.speed)
        }
    }
}
let player=new Player()
let e1=new enemy(5)
let e2=new enemy(10)
let e3=new enemy(15)
e1.x=100
e2.x=233
e3.x=366

paintbox.addEventListener('mousedown',()=>{
    player.speed=playerspeed
})
paintbox.addEventListener('mouseup',()=>{
    player.speed=0
})

setInterval(() => {
    player.y=100+Math.random(300)
    playerspeed=parseInt(Math.random()*10)
}, 2000);

function iscollided(box1,box2)
{

}

function drawbox(Box)
{
    pen.fillStyle=Box.color
    pen.fillRect(Box.x,Box.y,Box.size,Box.size)
}

drawbox(player)
drawbox(e1)
drawbox(e2)
drawbox(e3)

window.requestAnimationFrame(()=>{

})

function gameloop()
{
    if(!gameon)
    {
        return 
    }
    pen.clearRect(0,0,500,500)
    e1.move()
    e2.move()
    e3.move()
    player.move()
    if(iscollided(e1,player) || iscollided(e2,player) || iscollided(e3,player))
    {
        gameon=false
        window.alert("Game Over Now Get Lost Or Refresh To Restart")
    }
    drawbox(player)
    drawbox(e1)
    drawbox(e2)   
    drawbox(e3)
    window.requestAnimationFrame(gameloop)
}
gameloop()













//function updategame()
//{
//    window.requestAnimationFrame(()=>{
//    pen.clearRect(0,0,500,500)
//    e1.move()
//    e2.move()
//    e3.move()
//    drawbox(e1)
//    drawbox(e2)
//    drawbox(e3)
//    updategame()
//    })
//}
//updategame()

/*setInterval(()=>{pen.clearRect(0,0,500,500)
e1.y+=e1.speed
e2.y+=e2.speed
drawbox(e1)
drawbox(e2)
},1000)*/

/*pen.fillStyle="red"
pen.fillRect(0,200,50,50)
pen.fillStyle="blue"
pen.fillRect(150,0,50,50)
pen.fillRect(300,0,50,50)
pen.strokeRect(440,195,60,60)*/
