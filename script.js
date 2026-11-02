function nextScreen(number) {

  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });

  const next = document.getElementById('screen' + number);

  if (next) {
    next.classList.add('active');
  }

}

function finalMessage() {

  document.getElementById('final').innerHTML =
    "That's my favourite girl! ❤️<br> I love you endlessly. ♡";

}

// Floating hearts animation

function createHeart() {

  const heart = document.createElement('div');

  heart.className = 'floating-heart';
  heart.innerHTML = Math.random() > 0.5 ? '♥' : '♡';

  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (5 + Math.random() * 4) + 's';

  document.getElementById('hearts').appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 9000);

}

setInterval(createHeart, 700);