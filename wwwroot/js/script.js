addEventListener("load", function() {
    setTimeout(hideURLbar, 0);
}, false);

function hideURLbar() {
    window.scrollTo(0, 1);
}

const res = document.getElementById("res").innerHTML = xmlhttp.responseText;

addEventListener("getcode", function() {

})

function CodeReq() {
    var username = document.forms["whomai"]["username"].value;
    var reName = /^[a-z]{3,}$/;
    if (!reName.test(username)) {
        alert("请输入正确的用户名，例如邮箱地址 lxm@xxx.com，用户名输入 lxm");
        return
    }
    xmlr(username, 0)
    time(getcode, 10)
}

function regReq() {
    // 校验用户名和验证码格式
    var username = document.forms["whomai"]["username"].value;
    var reName = /^[a-z]{3,}$/;
    if (!reName.test(username)) {
        alert("请输入正确的用户名，例如邮箱地址 lxm@xxx.com，用户名输入 lxm");
        return
    }
    var code = document.forms["whomai"]["code"].value;
    var reCode = /^[0-9]{6}$/;
    if (!reCode.test(code)) {
        alert("请输入正确的验证码，距发送时间有效期 5 min");
        return
    }
    var username = document.forms["whomai"]["username"].value;
    xmlr(username, code)
    time(submit, 30)
}

function xmlr(username, code) {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp = new XMLHttpRequest();
    } else {
        // IE6, IE5 浏览器执行代码
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("res").innerHTML = xmlhttp.responseText;
        }
    }
    if (code == "0") {
        xmlhttp.open("GET", "./getcode?username=" + username, true);
    } else if (document.getElementsByTagName('meta')["desc"].content == "ssh") {
        xmlhttp.open("GET", "./cuser?username=" + username + "&code=" + code, true);
    } else if (document.getElementsByTagName('meta')["desc"].content == "sg") {
        xmlhttp.open("GET", "./sgrule?username=" + username + "&code=" + code, true);
    } else {
        return
    }
    xmlhttp.send();
}

function time(object, wait) {
    if (wait == 0) {
        object.removeAttribute("disabled");
        if (object.id == "submit") {
            object.value = "提交"
        } else if (object.id == "getcode") {
            object.value = "获取验证码"
        }
    } else {
        object.setAttribute("disabled", true);
        wait--;
        object.value = wait + "秒后可重试";
        setTimeout(function() {
            time(object, wait)
        }, 1000);
    }
}