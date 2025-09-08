//значение ключа "din" - функция

const flat = {
  number: 1,
  isFree: "no",
  hasAnimals: "yes",
  roomsCount: 1,
  kitchen: {
    hasGas: false,
  },
  din: function (text) {
    //старое написание функции
    console.log(text);
  },
  don(text) {
    console.log(text); //новое написание функции
  },
  click: async function () {
    // что-то делаем
  },
  "is internet speed high": true,
};

//обратиться к свойству
flat.hasAnimals;
flat.kitchen.hasGas;
flat.hasFire;
//undefined, т.к. нет такого свойства объекта
console.log(flat.hasFire);

flat.room = { "has.Sofa": true }; //добавить новое свойство

console.log(flat);

//Создать вторую константу, присвоив ей значение первой
//Удалить метод из первой константы: метод также будет удалён из второй
const flatNumberTwo = flat;
delete flat.click;
console.log(flatNumberTwo);

console.log(flat["is internet speed high"]); //для обращения к  длинному ключу квадратные скобки

//ARRAYS

//старый способ объявления массива
const flatOld = new Object({ name: "Vanya" });

//литеральный способ объявления массива
const myRooms = [1, "Belka", true, 2, "Strelka", false, 3, "Bond"];

myRooms[0];
console.log(myRooms.length); //8
myRooms[myRooms.length - 1]; //'Bond'
myRooms[0]; //1

//Упорядочивание данных

//Object.keys удобно перебирвать в цикле
console.log("Выводим масcивом свойства объекта");
Object.keys(flat);

//Object.entries
console.log("Выводим масcивом свойства объекта в формате ключ-значение");
Object.entries(flat);

const user = {
  name: "Ira",
  email: "Ira@qa.ru",
  password: "mySupePass",
};

//способ 1 (старый, долгий)
// если нет методов в копируемом объекте: переберём в цикле все свойства user и скопируем в наш объект (присвоим их).

let clone = {};
for (let key in user) {
  clone[key] = user[key];
}

//способ 2 (старый) (могут быть проблемы с глубокой вложенностью) может содержать функции
//Object.assign()

const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }

//способ 3 structuredClone НЕ может содержать функции. Правильный способ копирования объектов

const userClone = structuredClone(user);
console.log(userClone);

//Деструктуризация (object destructuring) 
const user_cat = {
  catname: "Ozzie",
  email: "Ozzie@qa.ru",
  password: "mySupePass",
};

/*
вместо:
const catname = user_cat.catname;
const email = user_cat.email;
const password = user_cat.password;
*/

//перечисляем имеющиеся свойства объекта user_cat, js проверяет в user_cat
//если есть свойство catname, то создаст константу catname
//если свойства нет, то создаст константу (age) и присвоит значение undefined
const {catname, email, password, catage} = user_cat; 
console.log(catname);
console.log(email);
console.log(password);//
console.log(catage); //undefined, т.к. не присвоено в константе