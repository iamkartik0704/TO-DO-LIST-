let counter = 1;
document.querySelector("#button").addEventListener('click',function(e){
    e.preventDefault()
    const lists = document.querySelector("#list");
    const newli = document.createElement("li");
    const newinput = document.createElement("input");
    const del_button = document.createElement("button");
    del_button.textContent = "🗑️";
    const go_up = document.createElement("button");
    go_up.textContent = "⬆️"
    const go_down = document.createElement("button");
    go_down.textContent = "⬇️"

    newli.id = `item-${counter++}`;
// assigns new id to each li we add

    del_button.addEventListener('click',function(){
        newli.remove()
    })
    go_up.addEventListener('click',function(){
     const prev = newli.previousElementSibling;
    //  if current id is 2 prev would be 1
     if(prev){
        lists.insertBefore(newli,prev)
     }
    })

    
    go_down.addEventListener('click',function(){
     const next = newli.nextElementSibling;
     if(next){
        lists.insertBefore(next,newli)
     }
    })

    

    newinput.type = "text"
    newinput.placeholder = "add new task"
    
    newli.appendChild(newinput);
    newli.appendChild(del_button);
    newli.appendChild(go_up);
    newli.appendChild(go_down);

    lists.appendChild(newli);
})



