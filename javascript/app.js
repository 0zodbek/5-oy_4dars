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
let pinfo1 = document.getElementById('pinfo1');
let pinfo2 = document.getElementById('pinfo2');
let body = document.querySelector('body')
let p = document.querySelector('p')
let card = document.getElementById('card1')
let card1 = document.getElementById('card2')
let card2 = document.getElementById('card3')

headerbtn1.addEventListener('click',function(){
body.style.backgroundColor = 'red';
h1.style.color = 'yellow'
p.style.color = 'yellow'
card.style.backgroundColor = 'Tomato'
card1.style.backgroundColor = 'Tomato'
card2.style.backgroundColor = 'Tomato'
pinfo.style.color = 'yellow'
pinfo1.style.color = 'yellow'
pinfo2.style.color = 'yellow'
})
headerbtn2.addEventListener('click',function(){
    body.style.backgroundColor = 'aqua';
    h1.style.color = 'green'
p.style.color = 'green'
card.style.backgroundColor = 'PaleTurquoise'
card1.style.backgroundColor = 'PaleTurquoise'
card2.style.backgroundColor = 'PaleTurquoise'
pinfo.style.color = 'Teal'
pinfo1.style.color = 'Teal'
pinfo2.style.color = 'Teal'
})
headerbtn3.addEventListener('click',function(){
    body.style.backgroundColor = 'green';
    h1.style.color = 'red'
p.style.color = 'red'
card.style.backgroundColor = 'DarkSeaGreen'
card1.style.backgroundColor = 'DarkSeaGreen'
card2.style.backgroundColor = 'DarkSeaGreen'
pinfo.style.color = 'red'
pinfo1.style.color = 'red'
pinfo2.style.color = 'red'
})
moonBtn.addEventListener('click',function(){
// body.style.backgroundColor = 'black'
body.style.backgroundColor = '#28292A'
p.style.color = 'white'
h1.style.color = 'white'
card.style.backgroundColor = 'grey'
card1.style.backgroundColor = 'grey'
card2.style.backgroundColor = 'grey'
pinfo.style.color = 'Cornsilk'
pinfo1.style.color = 'Cornsilk'
pinfo2.style.color = 'Cornsilk'
})
sunBtn.addEventListener('click',function(){
    // body.style.backgroundColor = 'black'
    body.style.backgroundColor = 'LightYellow'
    p.style.color = 'LightSalmon'
    h1.style.color = 'LightSalmon'
    card.style.backgroundColor = 'white'
card1.style.backgroundColor = 'white'
card2.style.backgroundColor = 'white'
pinfo.style.color = 'LightSalmon'
pinfo1.style.color = 'LightSalmon'
pinfo2.style.color = 'LightSalmon'
    })
    // sunBtn.style.hover = 