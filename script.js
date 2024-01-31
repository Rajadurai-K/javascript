'use strict';
// // var country="India";
// var contient ="Asia";
// var population =15000000;
// var mal = true;
// // var isIsland = mal;
// var lang;
// console.log(typeof lang);
// console.log(typeof isIsland);
// console.log(typeof country);
// console.log(typeof population);
// const name = "rajadurai";
// const place ="rajapalayam";
// const year =2005;
// const str = "I'm" +name +"coming from "+place;
// console.log(str);
//   language = 'portuguese';
// const country = 'Portugal';
// const continent = 'Europe';
// const isIsland = false;
// var numNeighbours =prompt("How many neighbour countries does your country have ?");
// var numNeighbours =Number(prompt("How many neighbour countries does your country have ?"));
// if (numNeighbours===1)
// {
//   console.log ("Only 1 border");
// }
// else if (numNeighbours >1)
// {
//   console.log("More than 1 border");
// }
// else{
// console.log("No borders")
// }
  
// let i=false;
// const ii=true;
// if(ii) i= true
// if(i) console.log("!")
// function fun(a ,b)
// {
//   console.log("value of a is :" +a);
//   console.log("value of b is :" +b);
//   const c= a+ b;
//   return c;
// }
//   const funn=fun (2,3)
// console.log(funn);


//function
function year(birth)
{
    const age = 2024 - birth;
    return age;
}
console.log(year(2005));

//function declaration
function addition(a,b)
{
    const c = a+b;
    return c;
}
const add = addition(100,100);
console.log(add);

//array
const friends =[10,11,12,13,22];
console.log(friends);
console.log(friends[2]);
friends[2]=13;
console.log(friends[2]);
const es =[2024 - 2005, 2024 - 2004,"coimabatore","rajaplayam",1,friends];
console.log(es);
console.log(es.length);
