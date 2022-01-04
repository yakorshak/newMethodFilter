'use sctrict'

/* Sergey Zaitsev, [27 Dec 2021, 20:51:54]:
Сделай фильтер еще
Свой
Который принимает функцию 
Просто точно такой же как js */

 let users = [
  {id: 1, name: "Вася"},
  {id: 2, name: "Петя"},
  {id: 3, name: "Маша"},
];

Array.prototype.newFilter = function(func){
  let newArray = [];
  //сделать через for 
  //сделать класс с методом который принимает функцию через которую будут проганяться все элементы масива но и который имеет все методы от Array; 
  for (let item of this){
    let index = this.indexOf(item);
    if(func(item, index, this)){
      newArray.push(item);
    }
  }
  return newArray;
};

let newArr1 = users.newFilter(item => item.id < 2);
console.log(newArr1); 

let newArr2 = users.newFilter(function(item, index){
  return index == 2;
});
console.log(newArr2);


/* let users = [
  {id: 1, name: "Вася"},
  {id: 2, name: "Петя"},
  {id: 3, name: "Маша"},
];
Array.prototype.newFilter = function(func){
  let newArray = [];
  for (let item of this){
    if(func(item)){
      newArray.push(item);
    }
  }
  return newArray;
};
let newArr1 = users.newFilter(item => item.id < 2);
console.log(newArr1); */