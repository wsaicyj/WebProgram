/**
 * Created by Chen on 2016/8/19.
 */
function addRec(form) {
    var returnValue = true;
    var selectOption = form.selectEmailList.selectedIndex;

    if (form.rec.value != "") {
        form.rec.value = form.rec.value + ';' + form.selectEmailList.options[selectOption].value;
    } else {
        form.rec.value = form.selectEmailList.options[selectOption].value;
    }
}