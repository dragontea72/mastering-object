const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill:function(amount,tips, tax){
        console.log(this);
        this.salary = this.salary - amount - tax - tips;
        return this.salary;
    }
}
// normalPerson.chargeBill(150);
// console.log(normalPerson.salary);
// console.log(normalPerson.firstName);

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Balam',
    salary: 25000,
}
const frindlyPerson = {
    firstName: 'Hero',
    lastName: 'kalam',
    salary: 25000,
}
const samelyPerson = {
    firstName: 'Hero',
    lastName: 'jamal',
    salary: 25000,
}

//normalPerson.chargeBill();
// const heroBillCharge = normalPerson.chargeBill.bind(heroPerson);
// heroBillCharge(2000);
// heroBillCharge(3000);
// console.log(heroPerson.salary);
// console.log(normalPerson.salary);

// const friendlyChargeBill = normalPerson.chargeBill.bind(frindlyPerson);
// friendlyChargeBill(1500);
// console.log(frindlyPerson.salary);

// normalPerson.chargeBill.call(heroPerson, 900);
// console.log(heroPerson.salary);

normalPerson.chargeBill.apply(heroPerson,[ 3000, 300 , 30]);
console.log(heroPerson.salary);