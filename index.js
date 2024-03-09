const generateBtn = document.querySelector('.generateBtn');
const qrcode = document.getElementById("qrcode");
const downloadBtn = document.querySelector('.downloadBtn a');

generateBtn.addEventListener('click', () => {
    qrcode.innerHTML = ''
    qrCodeGenerate();
    const canvas = document.querySelector('#qrcode canvas');
    downloadBtn.href = canvas.toDataURL();
});

function qrCodeGenerate() {
    let text = document.querySelector('#inputQrCode'),
        size = document.querySelector('#size'),
        dark = document.querySelector('#black'),
        light = document.querySelector('#white');

    if (text.value == '') {
        alert('Type something');
        return;
    }

    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: text.value,
        width: size.value,
        height: size.value,
        colorDark: dark.value,
        colorLight: light.value,
        correctLevel: QRCode.CorrectLevel.H
    });

}