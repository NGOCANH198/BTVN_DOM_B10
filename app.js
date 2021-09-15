let btn1 = document.querySelector(' .btn1');
let box1 = document.querySelector('.box1');
let check = 1;
btn1.onclick= function(){
    if( check== 0){
        box1.style.display = 'none';
        check= 1;
    }
    else{
        box1.style.display = 'block';
        check = 0;
    }
}


//bai2:
let btn2 =document.querySelector('.btn2');
let box2 = document.querySelector('.box2');
let letters = '0123456789ABCDEF';
btn2.onclick = function() {
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    box2.style.backgroundColor = color;
}
//bai3
let btn3 = document.querySelector('.btn3');
let box3 = document.querySelector('.box3');
let box4 = document.querySelector('.box4');
btn3.onclick = function() {
    let tmp = box3.innerHTML;
    box3.innerHTML = box4.innerHTML;
    box4.innerHTML = tmp;
}

// bai4:
let btn4 = document.querySelector('.btn4');
let box5 = document.querySelector('.box5');
let s = 16
btn4.onclick = function () {
    box5.style.fontSize = s + "px"
    s+=1
}
