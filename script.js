function kronometreActive() {
    $('#kronometre').slideDown('2000');
    document.getElementById('zamanlayici').style.display = 'none';
}

function zamanlayiciActive() {
    $('#zamanlayici').slideDown('2000');
    document.getElementById('kronometre').style.display = 'none';
}

//KRONOMETRE PART
var k;

function start() {
    k = setInterval(time, 1000);
}

function time() {
    var s = parseInt(document.getElementById('secondsk').innerHTML);
    var m = parseInt(document.getElementById('minutesk').innerHTML);
    var h = parseInt(document.getElementById('hoursk').innerHTML);
    var d = parseInt(document.getElementById('daysk').innerHTML);
    if (s < 60) {
        s += 1;
        document.getElementById('secondsk').innerHTML = s;
    }
    if (s == 60) {
        m += 1;
        document.getElementById('minutesk').innerHTML = m;
        s %= 60;
        document.getElementById('secondsk').innerHTML = s;
    }
    if (m == 60) {
        h += 1;
        document.getElementById('hoursk').innerHTML = h;
        m %= 60;
        document.getElementById('minutesk').innerHTML = m;
    }
    if (h == 24) {
        d += 1;
        document.getElementById('daysk').innerHTML = d;
        h %= 24;
        document.getElementById('hoursk').innerHTML = h;
    }
}

function stopKronometre() {
    clearInterval(k);
}

function resetKronometre() {
    clearInterval(k);
    document.getElementById('secondsk').innerHTML = "0";
    document.getElementById('minutesk').innerHTML = "0";
    document.getElementById('hoursk').innerHTML = "0";
    document.getElementById('daysk').innerHTML = "0";
}

function geri() {
    clearInterval(k);
    document.getElementById('secondsk').innerHTML = "0";
    document.getElementById('minutesk').innerHTML = "0";
    document.getElementById('hoursk').innerHTML = "0";
    document.getElementById('daysk').innerHTML = "0";
    $('#kronometre').fadeOut('1000');
}

//KRONOMETRE PART IS FINISHED!!!
//ZAMANLAYICI PART
var z;
var is, im, ih, id;
var s, m, h, d;
var time;

function geriZamanlayici() {
    clearInterval(k);
    document.getElementById('secondsk').innerHTML = "0";
    document.getElementById('minutesk').innerHTML = "0";
    document.getElementById('hoursk').innerHTML = "0";
    document.getElementById('daysk').innerHTML = "0";
    $('#zamanlayici').fadeOut('1000');
}

function startZamanlayici() {
    is = parseInt(document.getElementById('secondsi').value);
    im = parseInt(document.getElementById('minutesi').value);
    ih = parseInt(document.getElementById('hoursi').value);
    id = parseInt(document.getElementById('daysi').value);
    if (is >= 60 || im >= 60 || ih >= 24) {
        alert("You exceeded the time limits!!!");
    } else {
        document.getElementById('secondsz').innerHTML = is;
        document.getElementById('minutesz').innerHTML = im;
        document.getElementById('hoursz').innerHTML = ih;
        document.getElementById('daysz').innerHTML = id;
        $('#secondsi').fadeOut('100');
        $('#minutesi').fadeOut('100');
        $('#hoursi').fadeOut('100');
        $('#daysi').fadeOut('100');
        s = parseInt(document.getElementById('secondsz').innerHTML);
        m = parseInt(document.getElementById('minutesz').innerHTML);
        h = parseInt(document.getElementById('hoursz').innerHTML);
        d = parseInt(document.getElementById('daysz').innerHTML);
        time = s + (m * 60) + (h * 60 * 60) + (d * 24 * 60 * 60);
        z = setInterval(timeZamanlayici, 1000);
    }
}

function timeZamanlayici() {
    if (time == -1) {
        $('#zamanlayici').fadeOut('1000');
        $('#message').fadeIn('3000');
        $('#message').fadeOut('10000');
        resetZamanlayici();
    } else {
        var tmp = time;
        d = parseInt(tmp / 86400);
        tmp %= 86400;
        h = parseInt(tmp / 3600);
        tmp %= 3600;
        m = parseInt(tmp / 60);
        tmp %= 60;
        s = tmp;
        document.getElementById('secondsz').innerHTML = s;
        document.getElementById('minutesz').innerHTML = m;
        document.getElementById('hoursz').innerHTML = h;
        document.getElementById('daysz').innerHTML = d;
        time--;
    }
}

function stopZamanlayici() {
    clearInterval(z);
}

function resetZamanlayici() {
    clearInterval(z);
    $('#secondsi').fadeIn('100');
    $('#minutesi').fadeIn('100');
    $('#hoursi').fadeIn('100');
    $('#daysi').fadeIn('100');
    document.getElementById('secondsi').value = "0";
    document.getElementById('minutesi').value = "0";
    document.getElementById('hoursi').value = "0";
    document.getElementById('daysi').value = "0";
}

function geriZamanlayici() {
    clearInterval(k);
    document.getElementById('secondsz').innerHTML = "0";
    document.getElementById('minutesz').innerHTML = "0";
    document.getElementById('hoursz').innerHTML = "0";
    document.getElementById('daysz').innerHTML = "0";
    $('#zamanlayici').fadeOut('1000');
}