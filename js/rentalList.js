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