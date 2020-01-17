// -------timecountdown-------

var countdownnumber = 60;
var countdownid;

function initial() {

    countdownfunc();
    productamount();

}

function countdownfunc() {
    var x = document.getElementById("countdown");
    x.innerHTML = countdownnumber;

    if (countdownnumber == 0) {
        $("#nosell_btn").show();
        $("#buy_btn").hide();
        $("#prebuy_btn").hide();
        $("#purchasepage").hide();
        $("#prebuypage").hide();
        clearTimeout(countdownid);
    } else if (countdownnumber < 21) {
        countdownnumber--;
        $('.info_time_title1 h3').css('color', 'red');
        $('.info_time_title3 h3').css('color', 'red');
        $('#countdown').css('color', 'red');
        if (countdownid) {
            clearTimeout(countdownid);
        }
        countdownid = setTimeout(countdownfunc, 1000);

    } else {
        countdownnumber--;
        $("#nosell_btn").hide();
        if (countdownid) {
            clearTimeout(countdownid);
        }
        countdownid = setTimeout(countdownfunc, 1000);
    }
}


var totalamount = 10; //剩下數量
var totalpreamount = 0; //預購樹樣
var wantbuyamount = 0; //我要購買 的數量 (按下確定後執行clear()清空該值) 
var wantpreamount = 0; //我要預購 的數量 (按下確定後執行clear()清空該值) 


var $buyamount_show = $('#buyamount_show');
var $amount_show = $('#amount_show');
var $prebuyamount_show = $('prebuyamount_show');
var $preamount_show = $('preamount_show');

function productamount() {

    $("#prebuy_btn").hide();
    $("#prebuy_1").hide();
    $("#prebuy_2").hide();

    if (totalamount > 0) { //顯示當前剩下數量
        amount_show.innerHTML = totalamount;
    } else { //當剩下數量為空
        amount_show.innerHTML = totalamount;
        $("#buy_btn").hide();
        $("#prebuy_btn").show();
        $("#prebuy_1").show();
        $("#prebuy_2").show();
    }

    buyamount_show.innerHTML = wantbuyamount;
    prebuyamount_show.innerHTML = wantpreamount;
    preamount_show.innerHTML = totalpreamount;
}

// 我要購買加減
function buyadd() {

    if (wantbuyamount < totalamount) {
        wantbuyamount = wantbuyamount + 1;
    } else {
        wantbuyamount = wantbuyamount;
    }

    buyamount_show.innerHTML = wantbuyamount;

}

function buymin() {
    if (wantbuyamount > 0) {
        wantbuyamount = wantbuyamount - 1;
    } else {
        wantbuyamount = wantbuyamount;
    }

    buyamount_show.innerHTML = wantbuyamount;


}

// 我要預購加減
function prebuyadd() {

    wantpreamount = wantpreamount + 1;
    prebuyamount_show.innerHTML = wantpreamount;

}

function prebuymin() {
    if (wantpreamount > 0) {
        wantpreamount = wantpreamount - 1;
    } else {
        wantpreamount = wantpreamount;
    }

    prebuyamount_show.innerHTML = wantpreamount;


}

//按下購買鍵做剩下數量-想購買數量
function tobuy() {
    totalamount = totalamount - wantbuyamount;
    clear();
    productamount();
    window.location.href = "#!";

}
//按下預購購買鍵做預購數量+想預購數量
function toprebuy() {
    totalpreamount = totalpreamount + wantpreamount;
    clear();
    productamount();
    window.location.href = "#!";
}

// 清空想購買數量 & 想預購數量
function clear() {
    wantbuyamount = 0;
    wantpreamount = 0;
}