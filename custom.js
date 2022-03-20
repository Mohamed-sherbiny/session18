let num = [10, 20, 30, 40, 50];
let friends = ["mohamed", "mazen", "sherbiny", "gemi"];
num.map((element) => console.log(element));
num.reduce((start, current) => {
  console.log(start + current);
  return start + current;
});
let filterd = friends.filter((element) => {
  return element.startsWith("m") ? true : false;
});
console.log(filterd); 
