window.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');
    const bottomPanel = document.getElementById('bottomPanel');

    // Задержка "загрузки" (3 секунды)
    setTimeout(() => {
        // Скрываем лоадер
        loader.classList.add('hidden');
        
        // Показываем текст и кнопку с плавной анимацией
        setTimeout(() => {
            content.classList.remove('hidden');
            bottomPanel.classList.remove('hidden');
        }, 100); // Небольшая пауза для срабатывания CSS transition
    }, 3000);
});