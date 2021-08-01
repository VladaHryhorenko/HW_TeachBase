let human = {
    setName: function() {
        this.fullName = prompt("What is your full name?", "John Smith");
        this.firstName = this.fullName.split(" ")[0];
        this.lastName = this.fullName.split(" ")[1];
        delete this.fullName;
    },
    getName: function() {
        this.fullName = this.firstName + ' ' + this.lastName; 
        return this.fullName;
    },
    setDateOfBirth: function() {
        this.dateOfBirth = prompt("When is your birthday? (format dd.mm.yyyy)", "06.04.2001");
        let birthday = {};
        birthday.day = +(this.dateOfBirth.slice(0, 2)); // 6
        birthday.mounth = +(this.dateOfBirth.slice(3, 5)); // 4
        birthday.year = +(this.dateOfBirth.slice(6, 10)); // 2001
        this.age = Math.floor((new Date() - new Date(birthday.year, birthday.mounth, birthday.day)) / (1000 * 60 * 60 * 24 * 30 * 12));
    },
    getDateOfBirth: function() {
        return this.dateOfBirth;
    },
    getAge: function() {
        return this.age;
    }
};

human.setName();
console.log(human.getName());
human.setDateOfBirth();
console.log(human.getDateOfBirth());
console.log(human.getAge());
console.log(human);

