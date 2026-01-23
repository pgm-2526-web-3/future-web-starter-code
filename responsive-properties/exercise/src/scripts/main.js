import '../styles/main.css';

function showHeroHeight() {
    const heros = document.querySelectorAll('.hero');
    heros.forEach(hero => {
        const height = hero.offsetHeight;
        hero.innerHTML += `<br>JavaScript calculated height: ${height}px`;
    });
}

showHeroHeight();