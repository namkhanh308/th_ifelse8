btn1 = document.getElementById("btn1")
btn2 = document.getElementById("btn2")
btn3 = document.getElementById("btn3")
btn1.addEventListener("click", nut1)
btn2.addEventListener("click", nut2)
btn3.addEventListener("click", nut3)
let a = 0;
let b = []
function nut1(){
    if (btn1.checked == true) {
        b.push(btn1)
        console.log(b);
    }
    else{
        b.splice(1,1)
    }
    check();
}
function nut2(){
    if(btn2.checked == true){
        b.push(btn2)
        console.log(b)
    }
    else{
        b.splice(1,1)
    }
    check()
}
function nut3(){
    if(btn3.checked == true){
        b.push(btn3)
        console.log(b)
    }
    else{
        b.splice(1,1)
    }
    check()
}
function check() {
    if(b.length == 3){
        b[0].checked = false;
        b.splice(0,1);
        console.log(b)
    }
    if(b[0] == b[1] || b[1] == b[2] || b[2] == b[0]){
        b.splice(1,1)
    }
}