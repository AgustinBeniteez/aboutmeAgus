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


// Para el primer botón "bajar"
document.querySelector('.bajar').addEventListener('click', function() {
    document.getElementById('knowledge').scrollIntoView({
        behavior: 'smooth'
    });
});

// Para el segundo botón "bajar1"
document.querySelector('.bajar1').addEventListener('click', function() {
    // Obtén el elemento siguiente al conocimiento para desplazarte a él
    var nextSection = document.querySelector('.knowledge2');
    nextSection.scrollIntoView({
        behavior: 'smooth'
    });
});

// Para el segundo botón "bajar1"
document.querySelector('.bajar2').addEventListener('click', function() {
    // Obtén el elemento siguiente al conocimiento para desplazarte a él
    var nextSection = document.querySelector('.projects');
    nextSection.scrollIntoView({
        behavior: 'smooth'
    });
});


// Cards

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transition = 'transform 0.5s ease';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transition = 'transform 0.5s ease';
    card.style.transform = 'rotateY(0deg)';
  });
});