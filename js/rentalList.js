var fangxing = document.querySelector('.fangxing');
var fangxingli = fangxing.children;
var arr = [];
for (var i = 0; i < fangxingli.length - 1; i++) {
    var span = fangxingli[i].firstElementChild;
    span.setAttribute('index', i);
    span.onclick = function () {
        var ind = this.getAttribute('index');

        if (fangxingli[ind].firstElementChild.getAttribute('dianji')) {
            fangxingli[ind].firstElementChild.classList.remove('select');
            fangxingli[ind].firstElementChild.removeAttribute('dianji')


        } else {
            fangxingli[ind].firstElementChild.classList.add('select');
            fangxingli[ind].firstElementChild.setAttribute('dianji', 'dai');
        }





    }
}
// 排他法写页面
var cont = document.getElementsByClassName('cont');
var fenlei1 = document.getElementsByClassName('fenlei1')[0];
var fenlei1li = fenlei1.children;
for (var i = 0; i < fenlei1li.length; i++) {
    fenlei1li[i].setAttribute('index', i);
    fenlei1li[i].onclick = function () {
        var ind = this.getAttribute('index');
        for (var j = 0; j < fenlei1li.length; j++) {
            fenlei1li[j].classList.remove('active')
            cont[j].classList.add('contnone');
        }
        fenlei1li[ind].classList.add('active')
        cont[ind].classList.remove('contnone');
    }
}

// 主页面  点击上面的会出现蒙版
var fenlei = document.getElementsByClassName('fenlei')[0];
var fenleili = fenlei.children;
var mengban = document.getElementsByClassName('mengban')[0];
var chaxun = document.getElementsByClassName('chaxun')[0];
for (var i = 0; i < fenleili.length; i++) {
    fenleili[i].setAttribute('index', i);
    fenleili[i].onclick = function () {
        var ind = this.getAttribute('index');
        mengban.style.display = 'block';
        chaxun.style.display = 'block';

        fenlei1li[ind].classList.add('active')
        cont[ind].classList.remove('contnone');
    }
}
mengban.onclick = function () {
    mengban.style.display = 'none';
    chaxun.style.display = 'none';

}