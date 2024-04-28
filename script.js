document.addEventListener('DOMContentLoaded', function(event) {
    var dataText = ["Agustín Benítez"];

    function typeWriter(text, i, fnCallback) {
        if (i < (text.length)) {
            document.querySelector(".typing-effect").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
            setTimeout(function() {
                typeWriter(text, i + 1, fnCallback)
            }, 100);
        } else if (typeof fnCallback == 'function') {
            setTimeout(fnCallback, 900);
        }
    }

    function startTextAnimation(i) {
        if (typeof dataText[i] == 'undefined') {
            setTimeout(function() {
                startTextAnimation(0);
            }, 20000);
        }
        if (i < dataText.length) {
            typeWriter(dataText[i], 0, function() {
                startTextAnimation(i + 1);
            });
        }
    }

    startTextAnimation(0);
});