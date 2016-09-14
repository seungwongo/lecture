function moveNext(obj, len, nextId) {
    if (obj.value.length == len) {
        document.querySelector('#' + nextId).focus();
    }
}

function number(event) {
    var key = event.which || event.keyCode;

    if ((key >= 48 && key <= 57) || (key >= 96 && key <= 105) || key == 9 || key == 8 || key == 13 || key == 37 || key == 39 || key == 46 || key == 109 || key == 189) {
        return true;
    } else {
        if (window.event) {
            if (event.preventDefault) event.preventDefault();
            else event.returnValue = false;
        } else e.preventDefault();
    }
}
