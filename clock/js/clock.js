


function leading_zero(num){
    if(num<10){
        var temp = num.toString();
        temp = '0'+temp;
    }else{
        var temp = num.toString();
    }
    return temp
}



function hour(num){
    if (num==0){
        return 12;
    }else{
        return num;
    }
}


function meridian(num){
    if (num >= 12){
        return 'PM'
    }else{
        return 'AM'
    }
}
var flag =true;

window.setInterval(function(){var current_date = new Date();
    document.getElementById('hour').innerHTML = leading_zero(hour(current_date.getHours()%12));
    document.getElementById('minute').innerHTML = leading_zero(current_date.getMinutes());
    document.getElementById('meridian').innerHTML = meridian(current_date.getHours());
    document.getElementById('sec').innerHTML = leading_zero(current_date.getSeconds());},1000);
    


window.setTimeout(function(){(alert('This clock is based on GMT-06'))},1000);