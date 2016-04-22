/**
 * Created by AlexY on 2016/4/22.
 */


function initSliders() {
    var tFood = document.getElementById("food");
    var fFout = document.getElementById("tFoodOut");

    var tTrans = document.getElementById("transportation");
    var tOut = document.getElementById("transOut");


    var tEnt = document.getElementById("entertainment");
    var tEntOut = document.getElementById("entOut");

    var tEmerg = document.getElementById("energency");
    var tEmergOut = document.getElementById("emergOut");


    var tClothing = document.getElementById("clothing");
    var tClothingOut = document.getElementById("clothingOut");

    //给滑块添加input监听器，然后将滑动的结果显示出来
    tFood.addEventListener("input",function () {
        fFout.value = "$" + this.value;

    },false);

    tEnt.addEventListener("input", function () {
        tEntOut.value = "$" + this.value;
    }, false);

    tTrans.addEventListener("input", function () {
        tOut.value = "$" + this.value;
    }, false);

    tEmerg.addEventListener("input",function () {
        tEmergOut.value = "$" + this.value;
    }, false);

    tClothing.addEventListener("input",function () {
        tClothingOut.value = "$" + this.value;
    }, false);




}



// 将所有的滑块的输入的值相加，复制给id=myTotal的元素显示
function addAll() {
    var myNum = 0;
    var r = document.getElementById("food");
    var f = r.value;

    r = document.getElementById("transportation");
    var t = r.value;

    r = document.getElementById("entertainment");
    var ent = r.value;

    r = document.getElementById("energency");
    var em = r.value;


    r = document.getElementById("clothing");
    var clo = r.value;

    if (f == ""){
        f = 0;
    }

    if (t == ""){
        t = 0;
    }

    if (ent == ""){
        ent = 0;
    }

    if (em == ""){
        em = 0;
    }

    if (clo == ""){
        clo = 0;
    }


    myNum = parseInt(f)+parseInt(t) +parseInt(ent) +parseInt(em)
            + parseInt(clo);

    var myT = document.getElementById("myTotal");

    myT.innerHTML = "<strong>$" + myNum.toString() + "</strong>";





}

