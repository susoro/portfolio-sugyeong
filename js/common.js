function toggleMenu(){
    const menuToggle = document.querySelector('.toggle');
    const sidebar = document.querySelector('.sidebar');
    menuToggle.classList.toggle('active');
    sidebar.classList.toggle('active');
}


// 올라가는 버튼
arrowUp.addEventListener('click', () => {
    scrollIntoView('#home');
});