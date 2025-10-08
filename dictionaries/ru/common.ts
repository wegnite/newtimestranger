export const common = {
  buttons: {
    submit: "Отправить",
    cancel: "Отмена",
    confirm: "Подтвердить",
    back: "Назад",
    next: "Далее",
    save: "Сохранить",
    delete: "Удалить",
    edit: "Редактировать",
    view: "Просмотр",
    download: "Скачать",
    close: "Закрыть",
  },
  messages: {
    loading: "Загрузка...",
    success: "Операция успешно завершена",
    error: "Произошла ошибка",
    confirm: "Вы уверены?",
    required: "Это поле обязательно для заполнения",
    invalidInput: "Неверный ввод",
  },
  navigation: {
    home: "Главная",
    about: "О нас",
    contact: "Контакты",
    features: "Особенности",
    pricing: "Цены",
    guides: "Руководства",
    settings: "Настройки",
  },
  activePlayers: "Активные игроки",
  countries: "Страны",
  coffeeRecipes: "Рецепты кофе",
  userRating: "Рейтинг пользователей",
  localeSuggest: {
    switchToTitle: "Переключиться на {langName}?",
    currentLangDesc: "Текущий язык: {langName}.",
    dismissPermanent: "Не спрашивать снова",
    switchToAlt: "Переключиться на {langName}",
    switchToButton: "Переключить",
  },
  onlineGames: {
    bannerTitle: "Хотите играть напрямую?",
    bannerDescription:
      "Испытайте Dreamy Room и другие игры прямо в вашем браузере без загрузки",
    playNowButton: "Играть сейчас",
    featured: "Популярные игры",
    viewAllGames: "Смотреть все игры",
    levelCompletionText: "Играйте в Dreamy Room онлайн!",
  },
} as const;

export default common;
