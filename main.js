const bm = document.querySelector('.menu-burger');
const b1 = document.querySelector('.border1');
const b2 = document.querySelector('.border2');
const b3 = document.querySelector('.border3');
const list = document.querySelector('.menu-list');
console.log(bm);

bm.addEventListener('click', () => {
  list.classList.toggle('active-menu');
  b1.classList.toggle('active1');
  b2.classList.toggle('active2');
  b3.classList.toggle('active3');
});
