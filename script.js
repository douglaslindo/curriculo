function imprimirCurriculo() {
    window.print();
}

// Pequena animação ao carregar a página
window.onload = function() {
    const container = document.querySelector('.container');
    container.style.opacity = 0;
    container.style.transform = 'translateY(20px)';
    container.style.transition = 'all 0.6s ease';

    setTimeout(() => {
        container.style.opacity = 1;
        container.style.transform = 'translateY(0)';
    }, 200);
};
