var start_time;
var current_time;
var elapsed_time=0;
var flag = false;


function leading_zero(num){
    if(num<10){
        var temp = num.toString();
        temp = '0'+temp;
    }else{
        var temp = num.toString();
    }
    return temp
}

function ms_leading_zero(num){
    if(num<10){
        var temp = num.toString();
        temp = '00'+temp;
    }else if(num<100){
        var temp = num.toString();
        temp = '0'+temp;
    }else{
        var temp = num.toString();
    }
    return temp
}

document.getElementById('Start').onclick = function(){
    if (flag == false){
        flag = true
        start_time = new Date().getTime() - elapsed_time;
        interval = window.setInterval(function(){
            current_time = new Date().getTime()
            elapsed_time = current_time - start_time
            
            document.getElementById('ms').innerHTML = ms_leading_zero(elapsed_time%1000);
            document.getElementById('sec').innerHTML = leading_zero(Math.floor((elapsed_time/1000)));
            document.getElementById('minute').innerHTML = leading_zero(Math.floor((elapsed_time/1000)/60));
            document.getElementById('hour').innerHTML = leading_zero(Math.floor(((elapsed_time/1000)/60)/60));
        },10)
    }else{
        window.clearInterval(interval);
        flag = false;

    }
}


document.getElementById('reset').onclick = function(){
    window.clearInterval(interval);
    flag = false;
    elapsed_time = 0;
    document.getElementsByClassName('stop_watch').innerHTML = "00 : 00 : 00 : 000";
    document.getElementById('ms').innerHTML = "000";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('minute').innerHTML = "00";
    document.getElementById('hour').innerHTML = "00";
}
