const nums = document.querySelectorAll('.nums span');
const counter = document.querySelector('.counter');
const finalMessage = document.querySelector('.final');
const replay = document.querySelector('#replay');

runAnimation();

function resetDOM() {
  counter.classList.remove('hide');
  finalMessage.classList.remove('show');

  nums.forEach((num) => {
    num.classList.value = '';
  });

  nums[0].classList.add('in');
}

function runAnimation() {
  counter.classList.add('show');
  nums.forEach((num, idx) => {
    const nextToLast = nums.length - 1;

    // Add delay for each number to appear sequentially
    num.style.animationDelay = `${idx * 1.5}s`;

    num.addEventListener('animationend', (e) => {
      if (e.animationName === 'goIn' && idx !== nextToLast) {
        num.classList.remove('in');
        num.classList.add('out');
      } else if (e.animationName === 'goOut' && num.nextElementSibling) {
        num.nextElementSibling.classList.add('in');
      } else {
        counter.classList.add('hide');
        finalMessage.classList.add('show');
      }
    });
  });
}

replay.addEventListener('click', () => {
  resetDOM();
  runAnimation();
});
