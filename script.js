var a = "Thanks For Visit My WebSite 🥰"
d = 0
var b = ""
time_wait_for_appear_letter = 50
function congratulation(){
    // document.getElementById("clicked").innerHTML = "Thanks For Visit My WebSite 🥰"
    dequy()
}

function dequy(){
    if(d == a.length){
        d = 0;
        return;
    }
    else{
        if(a[d] == " "){
            time_wait_for_appear_letter = 0
        }
        b += a[d];
        d += 1;
        document.getElementById("clicked").innerHTML = b;
        setTimeout(() => {
            time_wait_for_appear_letter = 50
            dequy();
        }, time_wait_for_appear_letter);
    }
}