let human = {
    setName: function() {
        human.fullName = prompt("What is your full name?", "John Smith");
        human.firstName = human.fullName.split(" ")[0];
        human.lastName = human.fullName.split(" ")[1];
        delete human.fullName;
    },
    getName: function() {
        human.fullName = human.firstName + ' ' + human.lastName; 
        return human.fullName;
    },
    setDateOfBirth: function() {
        human.dateOfBirth = prompt("When is your birthday? (format dd.mm.yyyy)", "06.04.2001");
        let birthday = {};
        birthday.day = +(human.dateOfBirth.slice(0, 2)); // 6
        birthday.mounth = +(human.dateOfBirth.slice(3, 5)); // 4
        birthday.year = +(human.dateOfBirth.slice(6, 10)); // 2001
        human.age = Math.floor((new Date() - new Date(birthday.year, birthday.mounth, birthday.day)) / (1000 * 60 * 60 * 24 * 30 * 12));
    },
    getDateOfBirth: function() {
        return human.dateOfBirth;
    },
    getAge: function() {
        return human.age;
    }
};

human.setName();
console.log(human.getName());
human.setDateOfBirth();
console.log(human.getDateOfBirth());
console.log(human.getAge());
console.log(human);

