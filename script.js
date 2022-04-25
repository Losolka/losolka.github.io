
function digitalClock() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    document.getElementById("id_clock").innerHTML = hours + ":" + minutes + ":" + seconds;
    setTimeout("digitalClock()", 1000);
}

function Validate() {
    if (document.register.fname.value.length == 0) {
        alert('Поле "Фамилия" не должно оставаться пустым')
        return false;
    }
    if (document.register.name.value.length == 0) {
        alert('Поле "Имя" не должно оставаться пустым')
        return false;
    }
    if (document.register.name.value.length == 0) {
        alert('Поле "Имя" не должно оставаться пустым')
        return false;
    }
    if (document.register.otchestvo.value.length == 0) {
        alert('Поле "Отчество" не должно оставаться пустым')
        return false;
    }
    if (document.register.email.value.length == 0) {
        alert('Поле "E-mail" не должно оставаться пустым')
        return false;
    }

    alert('Спасибо за регистрацию! :)')
    window.location.reload()
}

