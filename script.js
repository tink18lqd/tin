var a = "Thanks For Visiting My WebSite"
d = 0
var b = ""
times = 0
time_wait_for_appear_letter = 25
var text = a
function congratulation(){
    // b = ""
    document.getElementById("haveonclick").onclick = ""
    times += 1
    // document.getElementById("clicked").innerHTML = "Thanks For Visit My WebSite 🥰"
    dequy()
    if(times <= 1){
        text = a + " 🥰"
    }
    if(times >= 2){
        text = a + "👿 (You Have Clicked " + times.toString() + " Times)"
    }
}

function dequy(){
    if(d == text.length){
        d = 0;
        return;
    }
    else{
        if(text[d] == " "){
            time_wait_for_appear_letter = 0
        }
        b += text[d];
        d += 1;
        document.getElementById("clicked").innerHTML = b;
        setTimeout(() => {
            time_wait_for_appear_letter = 25
            dequy();
        }, time_wait_for_appear_letter);
    }
}
