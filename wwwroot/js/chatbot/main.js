const configChatbot = {};
configChatbot.btn = '.chatbot__btn';
configChatbot.key = 'fingerprint';
configChatbot.replicas = { 
    bot: {
        0: { content: 'Добро пожаловать на сайт! Как я могу к Вам обращаться?', human: [0] },
        1: { content: '{{name}}, чем я могу Вам помочь?', human: [1] },
        3: { content: 'По какому критерию вы хотите найти информацию?', human: [2,6,15] },
        4: { content: 'О какой известной личности вы хотите прочитать на сайте?', human: [3,14,4,11,5,10] },
        5: { content: '{{name}},Вы можете прочитать про Петра Первого в эпохе Новое Время, событие: Россия до 1700 года ', human: [10] },
        6: { content: '{{name}},Вы можете прочитать про Владимира Ленина в эпохе  Новейшее время, событие: Становление СССР ', human: [10] },
        7: { content: '{{name}},Вы можете прочитать про Владимира Путина в эпохе Новейшее время, событие: Правление Путина ', human: [10] },
        8: { content: 'О каком событии вы хотите прочитать на сайте?', human: [8,7,12,13,9,10]},
        9: { content: '{{name}},Вы можете прочитать про Иосифа Сталина в эпохе Новейшее время, событие: Индустриализация и Коллективизация', human: [10] },
        10: { content: '{{name}},Вы можете прочитать про нападение Монголов в эпохе Средние века, событие: Монгольское нашествие', human: [10] },
        11: { content: '{{name}},Вы можете прочитать про Крещение Руси в эпохе Средние века, событие: Расцвет Киевской Руси' , human: [10] },
        12: { content: '{{name}},Вы можете прочитать про Великую Отечественную войну в эпохе Новейшее время, событие: Великая Отечественная Война' , human: [10] },
        13: { content: '{{name}},Вы можете прочитать про Куликовскую битву в эпохе Средние века, событие: Монгольское нашествие' , human: [10] },
        14: { content: '{{name}},Вы можете прочитать про Отмену крепостного права в эпохе Новое время, событие: Правление Александра II' , human: [10] },
        15: { content: '{{name}},Вы можете прочитать про Емельяна Пугачева в эпохе Новое время, событие: Правление Екатерины Великой' , human: [10] },
        16: { content: 'Какие события Вас интересуют?' , human: [16,17,18,19,10] },
        17: { content: '{{name}},Вы можете прочитать про события из Уровня 1 в эпохе Средние века, событие: Расцвет Киевской Руси' , human: [10] },
        18: { content: '{{name}},Вы можете прочитать про события из Уровня 2 в эпохе Средние века, событие: Борьба с Крестоносцами' , human: [10] },
        19: { content: '{{name}},Вы можете прочитать про события из Уровня 3 в эпохе Средние века, событие: Монгольское нашествие' , human: [10] },
        20: { content: '{{name}},Вы можете прочитать про события из Уровня 4 в эпохе Новое время, событие: Россия до 1700 года и Реформы Петра Великого' , human: [10] },
        
      },
      human: {
        0: { content: '', bot: 1, name: 'name' },
        1: { content: 'Мне нужна помощь с навигацией по сайту', bot: 3 },
        2: { content: 'Известная личность', bot: 4 },
        3: { content: 'Петр Первый', bot: 5 },
        4: { content: 'Владимир Ленин', bot: 6 },
        5: { content: 'Владимир Путин', bot: 7 },
        11: { content: 'Иосиф Сталин', bot: 9 },
        14: { content: 'Емельян Пугачев', bot: 15 },
        6: { content: 'Известное событие', bot: 8 },
        7: { content: 'Нападение Монголов', bot: 10 },
        8: { content: 'Крещение Руси', bot: 11 },
        12: { content: 'Куликовская битва', bot: 13 },
        9: { content: 'Великая отечественная война', bot: 12 },
        10: { content: 'Вернуться назад', bot: 3 },
        13: { content: 'Отмена крепостного права', bot: 14 },
        15: { content: 'События из игры', bot: 16 },
        16: { content: 'Уровень 1', bot: 17 },
        17: { content: 'Уровень 2', bot: 18 },
        18: { content: 'Уровень 3', bot: 19 },
        19: { content: 'Уровень 4', bot: 20 },
        

       
        
        
      }
 };
configChatbot.root = SimpleChatbot.createTemplate();
configChatbot.url = '/chatbot/chatbot.php';
let chatbot = new SimpleChatbot(configChatbot);
// при клике по кнопке configChatbot.btn
document.querySelector(configChatbot.btn).onclick = function (e) {
  this.classList.add('d-none');
  const $tooltip = this.querySelector('.chatbot__tooltip');
  if ($tooltip) {
    $tooltip.classList.add('d-none');
  }
  configChatbot.root.classList.toggle('chatbot_hidden');
  chatbot.init();
};
// добавление ключа для хранения отпечатка браузера в LocalStorage
let fingerprint = localStorage.getItem(configChatbot.key);
if (!fingerprint) {
  Fingerprint2.get(function (components) {
    fingerprint = Fingerprint2.x64hash128(components.map(function (pair) {
      return pair.value
    }).join(), 31)
    localStorage.setItem(configChatbot.key, fingerprint)
  });
}