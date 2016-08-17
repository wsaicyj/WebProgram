/**
 * Created by Chen on 2016/8/17.
 */
function validate(myEmail) {
    var returnValue = true;
    var amountEnter = document.myEmail.txtAmount.value;
    var currentFormat = /^\d+(\.\d{1,2}?$)/;

    if (currentFormat != test(amountEnter)) {
        returnValue = false;
        alert('输入不正确！')
        document.myEmail.txtAmount.focus();
        return returnValue;
    }
}

//检查select
function validateCard(myCard) {
    var returnValue = true;
    var selectOption = myCard.selCard.selectedIndex;

    if (selectOption == 0) {
        returnValue = false;
        alert("请选择一张卡！");
    } else {
        returnValue = false;
        alert(selectOption)
        alert(myCard.selCard.options[selectOption].value);
    }
    return returnValue;
}

//检查radio
function validateRadioCard(radCard) {
    var returnValue = true;
    var radSuit = radCard.radSuit;
    var radChosen = false;

    for (var i = 0; i < radSuit.length; i++) {

        if (radCard.agree.checked == false) {
            alert('你还未同意选项！')
            return false;
        } else if (radSuit[i].checked) {
            radChosen = true;
            alert("你选择的是" + radSuit[i].value + "卡");
        }

    }

    if (radChosen == false) {
        returnValue = false;
        alert("请选择一张信用!");
    }
    return returnValue;
}
//检查checkbox
function countCheckbox(field) {
    var intCount = 0;
    for (var i = 0; i < field.length; i++) {
        if (field[i].checked) {
            intCount++;
        }
    }
    alert("你总共选择了" + intCount + "项!")
}