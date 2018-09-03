function getCookie(key) {
    var cook = document.cookie.split("; ");
    for (var i = 0; i < cook.length; i++) {
        var acook = cook[i].split("=");
        if (acook[0] == key)
            return acook[1];
    }
    return null;
}
function setCookie(key, value, days) {
    var date = new Date();
    if (days) { date.setDate(date.getDate() + days) }
    document.cookie = key + "=" + value + ";expires=" + date;
}
function removeCookie() {
    setCookie(key, "", -1);
}
