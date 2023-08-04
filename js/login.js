


var yanzhen = document.querySelector('#yanzhen');
var fasong = document.querySelector('.fasong');
var denglu = document.querySelector('.denglu');
var tishi = document.querySelector('.tishi');

// 校验手机号码
var reg = /^1[3456789]\d{9}$/;
// 校验密码  
var reg1 = /^[a-zA-Z0-9]{6,}$/;
var s = 'gzi123456';
console.log(reg1.test(s));
var timer;
var num = 60;

// console.log(yan);
// 输入手机号  发送验证码
fasong.onclick = function () {



    var username = document.querySelector('#username').value;
    // console.log(username);
    clearInterval(timer);

    if (reg.test(username)) {
        // 设置一个倒计时

        timer = setInterval(function () {
            num--;
            fasong.innerHTML = `(${num})秒 重发`;
            if (num == 55) {
                var yan = parseInt(Math.random() * 10000);
                localStorage.setItem('yanzhengma', yan)
                alert('验证码：' + yan);
            }
            if (num == 0) {
                fasong.innerHTML = '重新发送';
                clearInterval(timer);
                num = 60;
            }
        }, 1000)

        localStorage.setItem('username', username);
    } else {
        tishi.innerHTML = '账号错误!'
    }

}
// 获取到验证码
// 点击注册的时候来验证验证码和密码是否合法
denglu.onclick = function () {
    var username = document.querySelector('#username').value;
    var pwd = document.querySelector('#pwd').value;
    console.log(pwd);
    if (!reg.test(username)) {
        tishi.innerHTML = '账号格式错误!'
    } else if (!reg1.test(pwd)) {
        tishi.innerHTML = '密码格式错误!'
    }
    else if (yanzhen.value != localStorage.getItem('yanzhengma')) {
        tishi.innerHTML = '验证码错误!'
    } else {
        // 注册成功后添加成功信息
        localStorage.setItem('pwd', pwd)

        setTimeout(function () {
            location.href = './register.html'
        }, 500)
    }
}
