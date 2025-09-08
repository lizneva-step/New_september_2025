class Shaurma {
  // переменные
  parentField = console.log("Свойства объекта");
  bread = "black";
  // car = 'auto'
  //  bread = 'white';

  constructor(size, sauce = true) {
    // инициализация свойств объекта
    // лаваш
    //  this.bread = 'bread';
    this.createdAt = new Date();
    this.size = size;
    this.sauce = sauce;
  }
  addSalt() {
    this.salt = true;
    console.log("ку!");
  }
  // методы
}
/*
1. Создается пустой объект
2. Инициализируются поля экземпляра (объекта) в порядке объявления
3. Конструктор
4.
shaurma.pole = '123';
this.pole = '123';
*/

const shaurma = new Shaurma("XL");
console.log(shaurma);

shaurma.addSalt();
console.log(shaurma);

//const sh = {};
//console.log(sh);
