import "../styles/style.css";

console.log('SVEAK test');

const burger = document.querySelector('.burger');
const sidebar = document.querySelector('.sidebar');

burger.addEventListener('click', () => {
    burger.classList.toggle('is-active');
    sidebar.classList.toggle('is-open');
});