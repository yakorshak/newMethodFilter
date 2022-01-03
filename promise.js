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
  for (let item of this){
    let index = this.indexOf(item);
    if(func(item, index)){
      newArray.push(item);
    }
  }
  return newArray;

};


let newArr2 = users.filter(function(item, index){
  return index == 2;
});



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