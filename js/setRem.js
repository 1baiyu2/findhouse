
// 设置可以动态缩放大小
function setRem() {
    var uiWidth = 375;
    var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;

    var html = document.querySelector('html');
    // console.log(html);
    html.style.fontSize = (clientWidth / uiWidth) * 10 + 'px'
}
window.onresize = setRem;
window.onload = setRem;