import "../styles/style.css";

const sidebar = document.querySelector('.sidebar');
const footer = document.querySelector('.footer');

function renderCards() {
    const cardsList = document.querySelector('.main__list');

    for (let i = 1; i <= 43; i++) {
        const card = document.createElement('div');
        card.classList.add('card');

        const title = document.createElement('h3');
        title.classList.add('card__title');
        title.textContent = `JS Заголовок ${i + 1} Lorem ipsum dolor sit amet`;

        const description = document.createElement('p');
        description.classList.add('card__description');
        description.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequatur cum dolorem';

        const cardFooter = document.createElement('div');
        cardFooter.classList.add('card__footer');
        cardFooter.textContent =
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';

        card.append(title, description, cardFooter);
        cardsList.append(card);
    }
}

function renderSidebarItems() {
    const sidebarList = document.querySelector('.sidebar__list');

    for (let i = 1; i <= 20; i++) {
        const item = document.createElement('li');
        item.classList.add('sidebar__item');

        const link = document.createElement('a');
        link.href = '#';
        link.textContent = `JS Пункт меню ${i + 1}`;

        item.append(link);
        sidebarList.append(item);
    }
}

function updateSidebarHeight() {
    if (window.innerWidth < 1024) {
        sidebar.style.height = '';
        return;
    }

    const height = Math.min(
        document.documentElement.clientHeight,
        footer.getBoundingClientRect().top
    );

    sidebar.style.height = `${Math.max(0, height)}px`;
}

window.addEventListener('scroll', updateSidebarHeight, {passive: true});
window.addEventListener('resize', updateSidebarHeight);

renderCards();
renderSidebarItems();
updateSidebarHeight();