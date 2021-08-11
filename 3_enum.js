//это вспомогательная сущность, котораяя помогает лучше структурировать код, если присутствуют какие-то однотипные элементы
//есть 2 типа записи
//1
var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standart"] = 1] = "Standart";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
var membership = Membership.Standart;
console.log(membership); // 1 тк по умолчанию присваиватся значения 0, 1, 2,... и тд
//но можно также получит строковое представление Simple,Standart,Premium - это называется reverce enum
var membershipReverse = Membership[2];
console.log(membershipReverse);
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["VK"] = "VK";
    SocialMedia["FACEBOOK"] = "FACEBOOK";
    SocialMedia["INSTAGRAM"] = "INSTAGRAM";
})(SocialMedia || (SocialMedia = {}));
var insta = SocialMedia.INSTAGRAM;
console.log(insta);
