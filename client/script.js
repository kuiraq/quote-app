const quoteBox = document.getElementById('quote-box'); // Получаем элемент, в который будем вставлять цитату
const getQuoteBtn = document.getElementById('get-quote-btn'); // Получаем кнопку для получения новой цитаты

async function fetchQuote() {
    try { 
        quoteBox.textContent = 'Загрузка...';
        const response = await fetch('http://localhost:3000/api/quote'); // Отправляем GET-запрос на сервер
        const data = await response.json();
        quoteBox.textContent = data.quote; // Вставляем полученную цитату в элемент
    } catch (error) {
        console.error('Ошибка при получении цитаты:', error);
        quoteBox.textContent = 'Ошибка при загрузке цитаты. Попробуйте снова.';
    }

}
// название функции без скобок, чтобы не вызывать её сразу, а передать как ссылку для обработчика события!!!!
getQuoteBtn.addEventListener('click', fetchQuote); // Добавляем обработчик клика на кнопку для получения новой цитаты   