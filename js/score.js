document.getElementById('plus1').addEventListener("click", onClickPlus);
document.getElementById('minus1').addEventListener("click", onClickMinus);
document.getElementById('death1').addEventListener("click", onClickDeath);
document.getElementById('name1').addEventListener("dblclick", onDblClickName);
document.getElementById('name1').addEventListener("touchend", onDblClickName);
document.getElementById('delete1').addEventListener("click", onClickDelete);
document.getElementById('addPlayer').addEventListener("click", onClickAddPlayer);

var countPlayer = 1;

function onClickPlus(){
    var num = this.id[4];
    document.getElementById('count' + num).innerHTML++;   
}
function onClickMinus(){
    var num = this.id[5];
    el = document.getElementById('count'+num);
    if(el.innerHTML - 1 < 0) {
        alert("Minimal level is 0");
        return;
    }
    el.innerHTML--;
}
function onDblClickName(){
    var num = this.id[4];
    var name;
    do{
        name = prompt("Напишите имя игрока новое имя игрока " 
            + document.getElementById('name' + num).innerHTML);
        if(name.length < 2 || name.length > 18){
            alert("2 <= name <= 18 ");
        }
    }
    while(name.length < 2 || name.length > 18);
    
    document.getElementById('name' + num).innerHTML = name;
}
function onClickDeath(){
    var num = this.id[5];
    document.getElementById('count' + num).innerHTML = 0;
}

function onClickAddPlayer(){
    countPlayer++;
    if(countPlayer > 6) {
        alert("maximum players is 6");
        countPlayer--;
        return;
    }

    var output = document.getElementById('score');

    let newbutton0 = document.createElement('button');
    newbutton0.classList.add('death'); 
    newbutton0.id = 'death' + countPlayer;
    newbutton0.textContent = 'Dead';

    let newbutton1 = document.createElement('button');
    newbutton1.id = 'plus' + countPlayer;
    newbutton1.textContent = '+';

    let counter = document.createElement('h6');
    counter.id = 'count' + countPlayer;
    counter.textContent = 0;

    let newbutton2 = document.createElement('button');
    newbutton2.id = 'minus' + countPlayer;
    newbutton2.textContent = '-';

    let name = document.createElement('h6');
    name.classList.add('name'); 
    name.id = 'name' + countPlayer;
    name.textContent = 'Name' + countPlayer;

    let newbutton3 = document.createElement('button');
    newbutton3.id = 'delete' + countPlayer;
    newbutton3.textContent = 'x';

    let newMessage = document.createElement('div'); 
    newMessage.id = 'player' + countPlayer;
    newMessage.classList.add('player'); 
    newMessage.appendChild(newbutton0);
    newMessage.appendChild(newbutton1);
    newMessage.appendChild(counter);
    newMessage.appendChild(newbutton2);
    newMessage.appendChild(name); 
    newMessage.appendChild(newbutton3);
    output.appendChild(newMessage);

    document.getElementById('plus' + countPlayer).addEventListener("click", onClickPlus);
    document.getElementById('minus' + countPlayer).addEventListener("click", onClickMinus);
    document.getElementById('death' + countPlayer).addEventListener("click", onClickDeath);
    document.getElementById('name' + countPlayer).addEventListener("dblclick", onDblClickName);
    document.getElementById('name' + countPlayer).addEventListener("touchend", onDblClickName);
    document.getElementById('delete' + countPlayer).addEventListener("click", onClickDelete);
}

function onClickDelete(){
    var num = this.id[6];
    if(num == countPlayer){
        countPlayer--;
        var parent = document.getElementById('score');
        var child = document.getElementById('player' + num);
        parent.removeChild(child);
    }
    else{
        alert("Начинайте удаление с последнего игрока");
    }
    
}