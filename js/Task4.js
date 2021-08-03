function TicketWindow() {
    this.cashBox = 0;
    this.events = [];
    this.visitors =[];
    this.createEvent = function(name, cost) {
        this.events.push({
            eventName: name,
            eventCost: cost
        })
    }
    this.buyTicket = function(ev) {
        let term = this.events.find( ({eventName}) => eventName === ev);
        //console.log(term);
        if(term) {
            this.cashBox += term.eventCost;
        }
        else{
            console.log('No such event');
        }
        let num =  parseInt(Math.random()*100000 - 345);
        this.visitors.push(
            {
                visitorID: num,
                eventName: ev
            });
        return num;
    }

    this.returnTicket = function(num) {
        let term = this.visitors.find( ({visitorID}) => visitorID === num );
        if( !term) {
            return console.log("No such visitor")
        }
        let ev = this.events.find( ({eventName}) => eventName === term.eventName); //ищем на какое мероприятие покупали бтлет, чтоб вернуть стоимость
        if(ev) {
            this.cashBox -= ev.eventCost;
        }
        else{
            console.log('No such event');
        }
        const filteredVisitors = this.visitors.filter((item) => item.visitorID !== num); // удаляем поситителя из базы
        this.visitors = filteredVisitors;
        return console.log("You returned the ticket");
    }

    this.seeVisitors = function() {
        console.log(this.visitors);
    }
    this.printCash = function() {
        console.log(this.cashBox);
    }
}

let ticketWindow = new TicketWindow();
ticketWindow.createEvent('Concert', 500);
ticketWindow.createEvent('Cinema', 1000);

let id1 = ticketWindow.buyTicket('Concert');
let id2 = ticketWindow.buyTicket('Concert');
let id3 = ticketWindow.buyTicket('Cinema');
let id4 = ticketWindow.buyTicket('Concert');
let id5 = ticketWindow.buyTicket('Cinema');

console.log(ticketWindow.printCash());
console.log(ticketWindow.seeVisitors());
ticketWindow.returnTicket(id2);

console.log(ticketWindow.printCash());
console.log(ticketWindow.seeVisitors());
ticketWindow.returnTicket(id1);
ticketWindow.returnTicket(id3);
ticketWindow.returnTicket(id4);
ticketWindow.returnTicket(id5);

console.log(ticketWindow.printCash());
console.log(ticketWindow.seeVisitors());
ticketWindow.returnTicket(id3);
ticketWindow.returnTicket(id5);
id5 = ticketWindow.buyTicket('Cinema');
console.log(ticketWindow.printCash());
console.log(ticketWindow.seeVisitors());