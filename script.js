function kronometreActive() {
    document.getElementById('buttons').style.display = 'none'
    document.getElementById('kronometre').style.display = 'block';
    document.getElementById('zamanlayici').style.display = 'none';
    document.getElementById('kalan-sure').style.display = 'none';
}

function zamanlayiciActive() {
    document.getElementById('buttons').style.display = 'none'
    document.getElementById('zamanlayici').style.display = 'block';
    document.getElementById('kronometre').style.display = 'none';
    document.getElementById('kalan-sure').style.display = 'none';
}

function kalanSureActive() {
    document.getElementById('buttons').style.display = 'none'
    document.getElementById('kalan-sure').style.display = 'block';
    document.getElementById('kronometre').style.display = 'none';
    document.getElementById('zamanlayici').style.display = 'none';
}

function geri() {
    document.getElementById('buttons').style.display = 'block'
    document.getElementById('kronometre').style.display = 'none';
    document.getElementById('zamanlayici').style.display = 'none';
    document.getElementById('kalan-sure').style.display = 'none';
}