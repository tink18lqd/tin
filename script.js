linkOfVNOI = "https://oj.vnoi.info/problem/"

nameOf = [
    "34 đồng xu",
    "HBT1D",
    "Quảng cáo",
    "Số phong phú",
    "Knapsack 1",
    "CUBE",
    "Đường đi có tổng lớn nhất",
    "A cộng B",
    "Dãy con tăng dài nhất (bản dễ)",
    "MULTAB",
    "DESERT",
    "I WANT",
    "Gửi thư",
    "Tìm TPLT mạnh"
]

idOf = [
    "coin34",
    "hbt1d",
    "ads",
    "nkabd",
    "atcoder_dp_d",
    "fc139_cube",
    "qbmax",
    "post",
    "liq",
    "fcb026_multab",
    "fcb037_desert",
    "bedao_t1_iwant",
    "nkletter",
    "tjalg"
]

Random_ = []

function randomNNumber(n){
    for(i = 0; Random_.length < n; i++){
        var a = Math.floor(Math.random() * (n))
        if(!Random_.includes(a)){
            Random_.push(a)
        }
    }
    for(i = 1; i <= n; i++){
        console.log(Random_[i-1])
        str = String(i)
        name__ = "a"+String(i)
        random_(str, name__, Random_[i-1]);
    }
}

function random_(name_, id_, randomNum){
    var getId = document.getElementById(name_)
    var getName = document.getElementById(id_)
    Link_ = linkOfVNOI + idOf[randomNum];
    Name_ = nameOf[randomNum]
    //  + " (" + idOf[randomNum] + ")";
    getId.href = Link_
    getName.innerHTML = Name_
    // console.log(Name_)
}

randomNNumber(nameOf.length)