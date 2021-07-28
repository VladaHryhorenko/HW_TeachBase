function averageSalary(arr) {
    let resArr = arr.reduce((acc, item) => {
         return acc + item.salary;
    }, 0);
    return resArr / arr.length;
}
function sortFunc(a,b) {
    return a.salary - b.salary;
}

function filterFunc(arr) {
    let res = arr.filter(item => {
        return (item.age > 25 && item.salary > 4500);
    })
    return res;
}

const employees = [
    {
     firstName: 'Alex',
     lastName: 'Smith',
     age: 54,
     salary: 10000,
     position: 'Architect'
    },
    {
     firstName: 'Gustav',
     lastName: 'Andersen',
     age: 31,
     salary: 5000,
     position: 'Software engineer'
    },
    {
     firstName: 'Liz',
     lastName: 'Taylor',
     age: 20,
     salary: 7000,
     position: 'Manager'
    }
];

//Средня зпрплата
console.log(averageSalary(employees));

//Сортировка по зарплате
console.log(employees.sort(sortFunc));

console.log(filterFunc(employees));
