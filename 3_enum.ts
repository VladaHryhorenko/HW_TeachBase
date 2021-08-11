//это вспомогательная сущность, котораяя помогает лучше структурировать код, если присутствуют какие-то однотипные элементы

//есть 2 типа записи
//1

enum Membership {
    Simple,
    Standart,
    Premium
}

const membership = Membership.Standart;
console.log(membership); // 1 тк по умолчанию присваиватся значения 0, 1, 2,... и тд
//но можно также получит строковое представление Simple,Standart,Premium - это называется reverce enum
const membershipReverse  = Membership[2];
console.log(membershipReverse);


enum SocialMedia {
    VK = "VK",
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM ='INSTAGRAM'
}

const insta = SocialMedia.INSTAGRAM;
console.log(insta); // 'INSTAGRAM'

enum links {
    youtube = 'https://youtube.com/',
    vk = 'https://vk.com/',
    facebook = 'https://facebook.com/'
}

links.vk; //'https://vk.com/'
links.youtube; //'https://youtube.com/'