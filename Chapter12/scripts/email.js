/**
 * Created by Chen on 2016/8/19.
 */

//将默认联系人添加到发送人
function addRec(form) {
    var selectOption = form.selectEmailList.selectedIndex;

    if (form.rec.value != "") {
        form.rec.value = form.rec.value + '; ' + form.selectEmailList.options[selectOption].value;
    } else {
        form.rec.value = form.selectEmailList.options[selectOption].value;
    }
}

//将默认联系人添加到抄送人
function addCC(form) {
    var selectOption = form.selectEmailList.selectedIndex;

    if (form.cc.value != "") {
        form.cc.value = form.cc.value + "; " + form.selectEmailList.options[selectOption].value;
    } else {
        form.cc.value = form.selectEmailList.options[selectOption].value;
    }
}

//验证
function validate(form) {
    var returnValue = true;
    var sendTo = form.rec.value;   //发送输入框
    var cc = form.cc.value;        //抄送输入框
    var topic = form.topic.value;  //主题输入框
    var taMessage = form.taMessage.value;  //正文输入框
    var rxEmail = /^\w(\.?[\w-])*@\w(\.?[\w-])*\.[a-z]{2,6}(\.[a-z]{2})?$/i; //邮箱正则表达式

    //发送人非空验证
    if (sendTo == "") {
        returnValue = false;
        alert('发送人不能为空!')
        form.rec.focus();
        return returnValue;
    } else {
        //发送人邮箱格式难证
        var arrTo = sendTo.split("; ");
        for (var i = 0; i < arrTo.length; i++) {
            if (!rxEmail.test(arrTo[i])) {
                returnValue = false;
                alert(arrTo[i] + "邮箱格式不正确，请正确填写！");
                form.rec.focus();
                return returnValue;
            }
        }
    }

    //抄送人非空验证
    if (cc == "") {
        returnValue = false;
        alert('抄送人不能为空!');
        form.cc.focus();
        return returnValue;
    } else {
        //抄送人邮箱格式验证
        var arrCC = cc.split("; ");
        for (var i = 0; i < arrCC.length; i++) {
            if (!rxEmail.test(arrCC[i])) {
                returnValue = false;
                alert(arrCC[i] + "邮箱格式不正确，请正确填写！");
                form.cc.focus();
                return returnValue;
            }
        }
    }

    //主题非空验证
    if (topic == "") {
        returnValue = false;
        alert('主题不能为空!');
        form.topic.focus();
        return returnValue;

    }

    //正文非空验证
    if (taMessage == "") {
        returnValue = false;
        alert('正文不能为空!');
        form.taMessage.focus();
        return returnValue;
    }


    return returnValue;

}