/*
var colorArray = [ "orange", "black", "red", "blue", "yellow"]; // создаем массив с цветами фона
var i = 0; 

function changeColor(){
    document.body.style.background = colorArray[i]; 
    i++;
    if( i > colorArray.length - 1){
        i = 0;
    }
}
let Name="Привет мир"
alert(Name)
   let colors = ['#f0f0f0','#0000','green']
console.log(colors)

//document.getElementById("main").textContent = "Привет,мир";
var iceCream = 'chocolate';
if (iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');
} else {
  alert('Awwww, but chocolate is my favorite...');
}

function multiply(num1,num2) {
    var result = num1 * num2;
    return result;
  }
  console.log(multiply(5,7))
  
  document.querySelector('html').onclick = function() 
 { alert("hi brother")};
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Приветствуем Вас, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Приветствуем Вас, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }
  let select = document.querySelector('select');
  let para = document.querySelector('p')

  select.addEventListener('change', setWeather);

  function setWeather(){
    var choise = select.value;
    if (choise === 'sunny'){
    para.textContent = 'Сегодня солнечно, оденьте шорты и купите мороженое'}
    else if (choise === 'rainy'){
      para.textContent = 'На улице дождь, вощьмите плащ и зонт'}
     else if (choise === 'snowing'){
                para.textContent = 'Морозно, лучше сидеть дома'}
    else if (choise === 'overcast'){
          para.textContent = ' Дождя нет небо синее , но будьте осторожны' }
    else{
      para.textContent = '';
    }
   }
  
 let select = document.querySelector('select');
 let html = document.querySelector('html')
 document.body.style.padding = '10px';

 function update(bgColor, textColor){
  html.style.background = bgColor;
  html.style.color = textColor;
 }
 
select.onchange = function(){
  (select.value === 'black')? update('black','white') : update("white", 'black')
}
var flowers = ["Rose ", "Lily ", "Jasmine "];
for (var i = 0; i<flowers.length; i++){
  alert(flowers[i]+ 'Это цветок')
}*/
var i = 1;
var msg = '';
while (i<10){
  msg+= i+ "x 3 = " + (i*3) + '<br/>';
  i++;
}
document.write(msg);