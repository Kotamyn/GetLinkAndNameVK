async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function printInfo(){
  const userInfo = [...document.querySelectorAll('.friends_field_title a:not([href="https://vk.com/faq20572"])')]
    .map(p => `https://vk.com/${p.getAttribute('href')} - ${p.textContent}`); // Берем ссылку и имя/фамилия
  console.log(userInfo);
}
  
async function scrollPageEnd(){
    const friends = document.querySelector('li[id="friends_tab_all"] span[class="ui_tab_count_new"]').innerText; // Получаем количество друзей
    const countScroll = Math.floor(parseInt(friends) / 15);
    for (let i = 0; i < countScroll; i++){
        window.scrollTo(0,document.body.scrollHeight); // Прокрутка страницы
        await sleep(1200) // Пауза для загрузки новых друзей
    }
}

async function main(){
  await scrollPageEnd();
  await printInfo();
}

await main();
