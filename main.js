window.scrollTo(0,document.body.scrollHeight); // Прокрутка до конца страницы
const allParagraphs = [...document.querySelectorAll('.friends_field_title a:not([href="https://vk.com/faq20572"])')];
const __data = allParagraphs.map(p => `https://vk.com/${p.getAttribute('href')} - ${p.textContent}`);
console.log(__data);
