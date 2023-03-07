export const messagesData = [
    {
        id: 1,
        author: 'Игорь Штырляев',
        text: 'Высылаю документы во вложении. Оптовую цену предлагаем при заказе от 10000 руб. Если потребуется скорректировать старый заказ - без проблемм. С уважением, Игорь.',
        date: '3 марта',
        isSelected: false,
        isRed: true,
        folders: ['Отправленные']
    },
    {
        id: 2,
        author: 'Игорь Штырляев',
        text: 'Анастасия, здравствуйте! Наверно по ошибке отправили? Мы не являемся владельцами кофейного аппарата smartcoffee.',
        date: '10 марта',
        isSelected: false,
        isRed: true,
        folders: ['Черновики']
    },
    {
        id: 3,
        author: 'timepad',
        text: 'Здравствуйте! Рассказываем про курсы английского в Яндекс Практикуме. Для аналитиков, разработчиков и продуктовых менеджеров, которые хотят работать в международной команде.',
        date: '13 марта',
        isSelected: false,
        isRed: true,
        folders: ['Удаленные']
    },
    {
        id: 4,
        author: 'わせありが',
        text: 'お問い合わせありがとうございます。以下の内容でお問い合わせを受け付けいたしました。担当者よりご連絡いたしますので、今しばらくお待ちくださいませ。※お問い合わせ内容により多少お時間がかかる場合があります。予めご了承ください。',
        date: '18 марта',
        isSelected: false,
        isRed: true,
        folders: ['Спам']
    },
    {
        id: 5,
        author: 'Language Drops',
        text: 'Получите скидку 40% на бессрочную подписку Drops Premium. Торопитесь, скидка сгорит через 24 часа!',
        date: '23 марта',
        isSelected: false,
        isRed: true,
        folders: ['Спам']
    },
    {
        id: 6,
        author: 'Кастомная Папка Важные',
        text: 'Данное письмо должно оказаться в папке важные после ее создания и быть отмечено как непрочитанное!...',
        date: '66 марта',
        isSelected: false,
        isRed: false,
        folders: ['Важные']
    },
    {
        id: 7,
        author: 'hh',
        text: 'Новые вакансии для резюме: Frontend-разработчик. Мы нашли несколько вакансий, которые могут вам подойти.',
        date: '9 марта',
        isSelected: false,
        isRed: false,
        folders: ['Входящие']
    },
    {
        id: 8,
        author: 'ozon',
        text: 'Здравствуйте, Игорь! Товары уже готовятся к отправке — мы пришлем уведомление в день доставки. Отслеживать статус заказа в реальном времени можно в Личном кабинете. Команда Ozon',
        date: '8 марта',
        isSelected: false,
        isRed: false,
        folders: ['Входящие']
    },
    {
        id: 9,
        author: 'steam',
        text: 'Игра продается со скидкой! Цены и скидки могут со временем меняться. Актуальную информацию вы найдете на странице товара в магазине Steam. Вы получили это письмо, потому что в вашем списке желаемого находится вышеуказанный продукт.',
        date: '9 марта',
        isSelected: false,
        isRed: false,
        folders: ['Входящие']
    },

];

export const foldersData = [
    {
        id: '1',
        folderName: 'Входящие',
        folderTag: 'Входящие',
        isSelected: true,
        isCustom: false
    },
    {
        id: '2',
        folderName: 'Отправленные',
        folderTag: 'Отправленные',
        isSelected: false,
        isCustom: false
    },
    {
        id: '3',
        folderName: 'Черновики',
        folderTag: 'Черновики',
        isSelected: false,
        isCustom: false
    },
    {
        id: '4',
        folderName: 'Удаленные',
        folderTag: 'Удаленные',
        isSelected: false,
        isCustom: false
    },
    {
        id: '5',
        folderName: 'Спам',
        folderTag: 'Спам',
        isSelected: false,
        isCustom: false
    }
];