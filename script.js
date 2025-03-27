const btn1=document.getElementById('btn1');
const btn2=document.getElementById('btn2');
const btn3=document.getElementById('btn3');
const btn4=document.getElementById('btn4');
const btn5=document.getElementById('btn5');
const btn6=document.getElementById('btn6');
const btn7=document.getElementById('btn7');
const plz=document.getElementById('plz');
const dialogue = document.getElementById('dialogue');


const addPlease =()=>{
    const pleaseTag = document.createElement('h2') 
    const textNode= document.createTextNode("Oops!! You won't able to say No");
    pleaseTag.appendChild(textNode);
    pleaseTag.classList.add('please-text');
    plz.appendChild(pleaseTag);
}

btn1.addEventListener('click',()=>{
    dialogue.innerText='i  l❤️ve you toooo♥️♥️♥️♥️'
    btn2.hidden=true;
    btn3.hidden=true; 
    btn4.hidden=true; 
})
btn2.addEventListener('mouseover',()=>{
    btn2.hidden=true;
    btn3.hidden=false;
    btn4.hidden=true;
    btn5.hidden=true;
    btn6.hidden=true;
    addPlease();
})
btn3.addEventListener('mouseover',()=>{
    btn3.hidden=true;
    btn2.hidden=true;
    btn4.hidden=false; 
    btn5.hidden=true;
    btn6.hidden=true;
    btn2.hidden=true;
    addPlease();
})
btn4.addEventListener('mouseover',()=>{
    btn4.hidden=true;
    btn5.hidden=false; 
    btn3.hidden=true;
    btn2.hidden=true;
    btn6.hidden=true;
    btn2.hidden=true;
    addPlease();
})
btn5.addEventListener('mouseover',()=>{
    btn4.hidden=true;
    btn6.hidden=false; 
    btn3.hidden=true;
    btn2.hidden=true;
    btn5.hidden=true;
    btn2.hidden=true;
    addPlease();
})
btn6.addEventListener('mouseover',()=>{
    btn4.hidden=true;
    btn7.hidden=false; 
    btn3.hidden=true;
    btn5.hidden=true;
    btn6.hidden=true;
    btn2.hidden=true;
    addPlease();
})
btn7.addEventListener('mouseover',()=>{
    btn4.hidden=true;
    btn2.hidden=false; 
    btn3.hidden=true;
    btn5.hidden=true;
    btn6.hidden=true;
    btn7.hidden=true;
    addPlease();
})
