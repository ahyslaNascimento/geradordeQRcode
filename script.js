document.getElementById('qrCodeImage').style.display = 'none';

function gerarQRCode() {

    var texto = document.getElementById('inputText').value;

    
    if (texto.trim() !== '') {
        var url = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(texto)}`;

      
        document.getElementById('qrCodeImage').src = url;

 
        document.getElementById('qrCodeImage').style.display = 'inline';
    } else {
        alert('Por favor, insira um valor antes de gerar o QR Code.');
    }
}