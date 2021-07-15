// Реализовать if для проверки доступа
// Выполняется проверка прав доступа пользователя к сайту при соблюдении следующих условий:
// 1. Возраст от 18 до 35 лет
// 2. Оплачена месячная подписка
// 3. Не действует блокировка
// 4. Имя пользователя не содержит внутри себя запрещенные слова
// Если пользователь является администратором, для получения доступа достаточно соблюдения только первого условия
// Информация о пользователе хранится в объекте такого вида:
// {
//  age: 18,
//  paid: true,
//  blocked: false,
//  badUsername: false,
//  isAdmin: false
// }

function hasAccess (person) {
    // if(person.age <= 18 && person.age >= 35) {
    //     console.log("You have no access");
    //     return;
    // } else if(+person.paid === 0){ //(person.paid === false)
    //     console.log("You have no access. Pay, please");
    //     return;
    // } else if(+person.blocked === 1) {
    //     console.log("You have no access. You are blocked");
    //     return;
    // } else if(+person.badUsername === 1) {
    //     console.log("You have no access. You have bad userName");
    //     return;
    // } else if (+person.isAdmin === 0 || person.isAdmin === 1 && (person.age <= 18 && person.age >= 35)) {
    //     console.log("You have no access. You are not an admin");
    //     return;
    // } else {
    //     console.log("You have an access");
    //     return;
    // }

    if(person.isAdmin) {
        if(person.age < 18 || person.age > 35) {
            console.log("You have no access. You are too young");
            return;
        } else {
            console.log("You have an access");
            return;
        }
    } else {
        if(person.age < 18 || person.age > 35) {
            console.log("You have no access. You are too young");
            return;
        }
        if(+person.paid === 0){ //(person.paid === false)
            console.log("You have no access. Pay, please");
            return;
        }
        if(+person.blocked === 1) {
            console.log("You have no access. You are blocked");
            return;
        }
        if(+person.badUsername === 1) {
            console.log("You have no access. You have bad userName");
            return;
        } 
        else {
            console.log("You have an access");
            return;
        }
    }
}
let arr = [
    {
        age: 20,
        paid: true,
        blocked: false,
        badUsername: false,
        isAdmin: true,
   },
   {
        age: 15,
        paid: true,
        blocked: false,
        badUsername: false,
        isAdmin: true,
    },
    {
        age: 24,
        paid: false,
        blocked: false,
        badUsername: false,
        isAdmin: true,
    },
    {
        age: 20,
        paid: true,
        blocked: false,
        badUsername: false,
        isAdmin: false,
   },
   {
        age: 20,
        paid: true,
        blocked: true,
        badUsername: false,
        isAdmin: false,
    }
];

for (let i = 0; i < arr.length; i++) {
    console.log(hasAccess(arr[i]));
}




    