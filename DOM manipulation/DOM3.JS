window.onload=function()
{
    let newtask=document.getElementById('newtask')
    let addtask=document.getElementById('addtask')
    let todolist=document.getElementById('todolist')

    addtask.onclick=function()
    {
        let  li=document.createElement('li')
        let xbtn=document.createElement('button')
        xbtn.innerText='❌'
        xbtn.onclick=function(event)
        {
            event.target.parentElement.remove()
        }


        let taskspan=document.createElement('span')
        taskspan.innerText=newtask.value


        let upbtn=document.createElement('button')
        upbtn.innerText='⬆️'


        li.appendChild(xbtn)
        li.appendChild(taskspan)
        li.appendChild(upbtn)
        todolist.appendChild(li)
    }
}