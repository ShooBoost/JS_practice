$(document).ready(function(){
    // return html code of all cards div and formulas li
    function mutipleCard(){
        var allHtmlStr = '';

        // mutiple num
        for(i = 2; i <= 9; i++){
            var htmlStr = '';
            for(k = 1; k <= 9; k ++){
                ans = i * k;
                htmlStr += '<li class="formula formula-' + k + '">' + i + ' x ' + k + ' = ' + ans + '</li>';
            };
            allHtmlStr += `
                <div class="card card-`+ i +`">
                    <h4 class="num">`+ i +`</h4>
                    <ul class="formulas">`+ htmlStr +`</ul>
                </div>
            `
        };
        return allHtmlStr;
    };

    $(".cards").html(mutipleCard());

});

/*
    // return html code of formulas li
    function mutiple(myNum){
        var htmlStr = '';
        for(i = 1; i <= 9; i ++){
            ans = myNum * i;
            htmlStr += '<li class="formula-' + i + '">' + myNum + ' x ' + i + ' = ' + ans + '</li>';
        };
        return htmlStr;
    };

    $("#card-3 .num").text("3");
    $("#card-3 .formulas").html(mutiple(3));


function mutiple(myNum){
    var arr = [];
    for(i = 1; i <= 9; i++){
        ans = myNum * i;
        arr.push(myNum + ' x ' + i + ' = ' + ans);
    };
    return arr;
};

var arr_two = mutiple(2);
console.log(arr_two);
document.getElementById("num_two").innerHTML = arr_two;


*/