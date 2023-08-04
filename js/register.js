var tab = document.querySelector('.tab');
var tabli = tab.children;
var mima = document.getElementsByClassName('mima');
for (var i = 0; i < tabli.length; i++) {
    tabli[i].setAttribute('index', i);
    tabli[i].onclick = function () {
        var ind = this.getAttribute('index');
        for (var i = 0; i < tabli.length; i++) {
            tabli[i].classList.remove('liactive');
            mima[i].classList.add('yanzheng');
        }
        tabli[ind].classList.add('liactive');
        mima[ind].classList.remove('yanzheng');
    }
}

// 登录校验判断
// 选择密码判断
var denglu = document.querySelector('.deng');

denglu.onclick = function () {
    // 判断账号或者密码正确和存在

    var username = document.querySelector('#username1').value;
    var pwd = document.querySelector('#pwd').value;

    if (!reg.test(username)) {
        tishi.innerHTML = '账号格式错误!'
    } else if (username != localStorage.getItem('username')) {
        tishi.innerHTML = '账号不存在!'
    } else if (!reg1.test(pwd)) {
        tishi.innerHTML = '密码格式错误!'
    } else if (pwd != localStorage.getItem('pwd')) {
        tishi.innerHTML = '密码错误!'
    }
    else {
        // 登录成功后添加成功信息
        localStorage.setItem('istrue', true)
        setTimeout(function () {
            location.href = './index.html'
        }, 500)
    }
}



// 选择验证码登录
var yanzhen = document.querySelector('#yanzhen');
var fasong = document.querySelector('.fasong');
var liji = document.querySelector('.liji');
var tishi = document.querySelector('.tishi');

// 校验手机号码
var reg = /^1[3456789]\d{9}$/;
// 校验密码  
console.log(reg1.test(s));
var timer;
var num = 60;

// console.log(yan);
// 输入手机号  发送验证码
fasong.onclick = function () {
    var username = document.querySelector('#username2').value;
    console.log(username);
    // console.log(username);
    clearInterval(timer);
    if (!reg.test(username)) {
        tishi.innerHTML = '账号格式错误!'
    } else if (username != localStorage.getItem('username')) {
        tishi.innerHTML = '账号不存在!'
    } else {
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
    }

}


// 获取到验证码
// 点击注册的时候来验证验证码和密码是否合法
liji.onclick = function () {
    var username = document.querySelector('#username2').value;
    var pwd = document.querySelector('#pwd').value;
    console.log(pwd);
    if (!reg.test(username)) {
        tishi.innerHTML = '账号格式错误!'
    }
    else if (yanzhen.value != localStorage.getItem('yanzhengma')) {
        tishi.innerHTML = '验证码错误!'
    } else {
        console.log('登录成功');
        localStorage.setItem('istrue', true);
        setTimeout(function () {
            location.href = './index.html'
        }, 500)
    }
}


