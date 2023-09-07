async function sleep(ms) {
  return new Promise(
    resolve => setTimeout(resolve, ms)
  );
}

async function scroll_page_end(){
    const friends = document.querySelector('li[id="friends_tab_all"] span[class="ui_tab_count_new"]').innerText; // Получаем количество друзей
    const count_scroll = Math.floor(parseInt(friends) / 15);
    for (let i = 0; i < count_scroll; i++){
        window.scrollTo(0,document.body.scrollHeight); // Прокрутка страницы
        await sleep(1200)
    }
    return true
}
let go = await scroll_page_end();
if (go) {
    const users = [...document.querySelectorAll('.friends_field_title a:not([href="https://vk.com/faq20572"])')];
    const user_info = users.map(p => `https://vk.com/${p.getAttribute('href')} - ${p.textContent}`); // Берем ссылку и имя/фамилия
    console.log(user_info);
}
