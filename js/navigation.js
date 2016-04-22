/**
 * Created by AlexY on 2016/4/21.
 */

var n1, n2, n3, n4;  //指向Navigation
var d1, d2, d3, d4;   //指向DIV标签

var hightLight = "#FFDE07";
var normal = "#4c4d4e";






function init() {
    n1 = document.getElementById("nav1");
    n2 = document.getElementById("nav2");
    n3 = document.getElementById("nav3");
    n4 = document.getElementById("nav4");

    d1 = document.getElementById("home");
    d2 = document.getElementById("budget");
    d3 = document.getElementById("location");
    d4 = document.getElementById("contact");

    n1.style.background = hightLight;


    initSliders();

}

/**
 * 设置tab高亮
 * @param tab 设置哪个标签
 */
function showTab(tab) {

    // tab 1 = Home ,  2 = Budget , 3=Location, 4=Contact

    if ( tab == 1){
        n1.style.background = hightLight;
        n2.style.background = normal;
        n3.style.background = normal;
        n4.style.background = normal;


        d1.style.display = "block";
        d2.style.display = "none";
        d3.style.display = "none";
        d4.style.display = "none";

    }

    if ( tab == 2){
        n2.style.background = hightLight;
        n1.style.background = normal;
        n3.style.background = normal;
        n4.style.background = normal;


        d2.style.display = "block";
        d1.style.display = "none";
        d3.style.display = "none";
        d4.style.display = "none";

    }


    if ( tab == 3){
        n3.style.background = hightLight;
        n2.style.background = normal;
        n1.style.background = normal;
        n4.style.background = normal;

        d3.style.display = "block";
        d2.style.display = "none";
        d1.style.display = "none";
        d4.style.display = "none";

    }


    if ( tab == 4){
        n4.style.background = hightLight;
        n2.style.background = normal;
        n3.style.background = normal;
        n1.style.background = normal;


        d4.style.display = "block";
        d2.style.display = "none";
        d3.style.display = "none";
        d1.style.display = "none";
    }


}


