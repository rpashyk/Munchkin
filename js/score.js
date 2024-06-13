$(document).ready(function () {


    $('.plus').click(onClickPlus);
    $('.minus').click(onClickMinus);
    $('.death').click(onClickDeath);
    $('.name').dblclick(onDblClickName);
    // $('.name').touchend(onDblClickName);
    $('.delete').click(onClickDelete);
    $('.color').click(onClickAddPlayer);

    //document.getElementById('addPlayer').addEventListener("click", onClickAddPlayer);


    function onClickPlus() {
        var num = this.id[4];
        document.getElementById('count' + num).innerHTML++;
    }

    function onClickMinus() {
        var num = this.id[5];
        el = document.getElementById('count' + num);
        if (el.innerHTML - 1 < 0) {
            alert("Minimal level is 0");
            return;
        }
        el.innerHTML--;
    }

    function onDblClickName() {
        var num = this.id[4];
        var name;
        do {
            name = prompt("Напишите имя игрока новое имя игрока " +
                document.getElementById('name' + num).innerHTML);
            if (name.length < 2 || name.length > 18) {
                alert("2 <= name <= 18 ");
            }
        }
        while (name.length < 2 || name.length > 18);

        document.getElementById('name' + num).innerHTML = name;
    }

    function onClickDeath() {
        var num = this.id[5];
        document.getElementById('count' + num).innerHTML = 0;
    }

    function onClickAddPlayer() {
        var num = 0;

        switch (this.id) {
            case 'addyellow':
                num = 1;
                break;
            case 'addred':
                num = 2;
                break;
            case 'addblue':
                num = 3;
                break;
            case 'addgreen':
                num = 4;
                break;
            case 'addpurple':
                num = 5;
                break;
            case 'addorange':
                num = 6;
                break;
        }
        $('main #score #player' + num).show();
        $('main .map #' + this.id.slice(3, this.id.length + 1) + '1').show();

    }

    function onClickDelete() {
        $('main #score #player' + this.id[6]).hide();
        var color;
        switch (this.id[6]) {
            case '1':
                color = 'yellow';
                break;
            case '2':
                color = 'red';
                break;
            case '3':
                color = 'blue';
                break;
            case '4':
                color = 'green';
                break;
            case '5':
                color = 'purple';
                break;
            case '6':
                color = 'orange';
                break;
        }
        $('main .map img[id^=' + color + ']').css('left', '').css('top', '').hide();
    }

    $('main .map img').hide();
    $('#score .player ').hide();
    $(function () {

        $('.dragElement').draggable({
            containment: ".map"
        });

    });
    $('.map div').css('background-image', function () {
        return 'url("images/' + this.id + '.jpg")'
    });
    $('.map div').css('background-size', 'contain');

    //style="background-image: url('images/lvl1.jpg'); background-size: contain;"
});