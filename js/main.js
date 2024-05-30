const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');
const cardItems = document.querySelectorAll('.card');

tabItem.forEach(function(element){
  element.addEventListener('click', open);
});

function open(evt){
  const tabTarget = evt.currentTarget;
  const button = tabTarget.dataset.button;

  tabItem.forEach(function(item){
    item.classList.remove('tabs__btn-item--active');
  });

  tabTarget.classList.add('tabs__btn-item--active');

  tabContent.forEach(function(item){
    item.classList.remove('tabs__content-item--active');
  });

  document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
}

const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu__list--active');
});

const filterButtons = document.querySelectorAll('.tabs__btn-item');

filterButtons.forEach(button => {
  button.addEventListener('click', filterCards);
});

function filterCards(evt) {
  const category = evt.target.dataset.category;

  cardItems.forEach(card => {
    const cardCategory = card.dataset.category;

    if (category === 'all' || cardCategory === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

document.querySelector('.form').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.querySelector('input[placeholder="Name"]');
  const email = document.querySelector('input[placeholder="E-mail"]');
  const text = document.querySelector('textarea[placeholder="Your text"]');

  if (!name.value.trim()) {
    alert("Введіть Ваше ім'я");
    name.focus();
    return;
  }

  if (!validateEmail(email.value.trim())) {
    alert('Не вірно вказана електронна адреса');
    email.focus();
    return;
  }

  if (!text.value.trim()) {
    alert('Введіть Ваш запит');
    text.focus();
    return;
  }

  alert("Дякую, ми з Вами зв'яжемося");
  this.reset();
});

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(email);
}




const swiper = new Swiper('.swiper', {
  effect: "fade",
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});