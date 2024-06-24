let header = document.getElementById('header');
// console.log(header);
// header.style.display = 'flex'
let h1 = document.querySelector('h1');
let headerbtn1 = document.getElementById('headerBtn1');
let headerbtn2 = document.getElementById('headerBtn2');
let headerbtn3 = document.getElementById('headerBtn3');
let moonBtn = document.getElementById('moonBtn');
let sunBtn = document.getElementById('sunBtn');
let p1 = document.getElementById('p1');
let pinfo = document.getElementById('pinfo');
let body = document.querySelector('body')
let p = document.querySelector('p')
let card = document.getElementById('card1')
let card1 = document.getElementById('card2')
let card2 = document.getElementById('card3')

headerbtn1.addEventListener('click',function(){
body.style.backgroundColor = 'red';
h1.style.color = 'yellow'
p.style.color = 'yellow'
})
headerbtn2.addEventListener('click',function(){
    body.style.backgroundColor = 'aqua';
    h1.style.color = 'green'
p.style.color = 'green'
})
headerbtn3.addEventListener('click',function(){
    body.style.backgroundColor = 'green';
    h1.style.color = 'red'
p.style.color = 'red'
})
moonBtn.addEventListener('click',function(){
// body.style.backgroundColor = 'black'
body.style.backgroundColor = '#28292A'
p.style.color = 'white'
h1.style.color = 'white'
card.style.backgroundColor = 'grey'
card1.style.backgroundColor = 'grey'
card2.style.backgroundColor = 'grey'
})
sunBtn.addEventListener('click',function(){
    // body.style.backgroundColor = 'black'
    body.style.backgroundColor = 'white'
    p.style.color = 'black'
    h1.style.color = 'black'
    })
    // sunBtn.style.hover = 