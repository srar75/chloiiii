document.addEventListener('DOMContentLoaded', () => {
    const btnNo = document.getElementById('btnNo');
    const btnSi = document.getElementById('btnSi');
    const dialog = document.querySelector('.dialog');
    const mensajeAmor = document.getElementById('mensaje');

    btnNo.addEventListener('click', () => {
        const maxX = window.innerWidth - btnNo.offsetWidth;
        const maxY = window.innerHeight - btnNo.offsetHeight;
        
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;
        
        btnNo.style.position = 'fixed';
        btnNo.style.left = randomX + 'px';
        btnNo.style.top = randomY + 'px';
    });

    btnSi.addEventListener('click', () => {
        dialog.style.display = 'none';
        mensajeAmor.classList.remove('hidden');
    });
});