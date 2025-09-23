class Home {
  lendlord: true;
  constructor(){
  this.roof = 'red';
  this.door = 'wood';
}
  sayHello(){
    console.log('Привет, вы пришли меня покупать?');
  }
}

//const home = new Home();
//home.sayHello();

class Flat extends Home {
    lendlord: false;

  constructor () {
    super();
    this.rooms = 3;
    this.roof = 'orange';
    this.lendlord = 'ку';

  }
  sayHelloFromRefrigirator(){
        console.log('Привет, вы принесли свежие продукты?');
  }
   sayHello(){
    console.log('Привет, вы пришли меня брать в ипотеку?');
  }
}

const flat = new Flat();
flat.sayHello();
console.log(flat.roof);
console.log(flat.lendlord);

flat.sayHelloFromRefrigirator();

// 1 иницициализируются поля класса home   lendlord: true;
// 2 конструктор базового класса
// 3 поля производного класса
// 4 конструктор производного класса