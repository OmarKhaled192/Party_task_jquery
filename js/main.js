// section 1
let c = 0;
function reflect() {
        if(c % 2)
            {
                $("#home .side-bar").animate({left: "-25%"}, 1000);
                $("#home .open-bar").animate({marginLeft: 0}, 1000);
            }
        else 
           {
               $("#home .side-bar").animate({left: 0}, 1000);
                $("#home .open-bar").animate({marginLeft:  "25%"}, 1000);
           }
    c++;
}

$(function () {
    $("#home .open-bar").on("click", function () {
        reflect();
    })
    $("#home .side-bar .xmark").on("click", function () {
        reflect();
    })
});

// section 2
$(function () { 
    let titles = $("#duration .articles article p");
    titles.on("click", function () {
        titles.next().slideUp();
        if($(this).next().css("display")=="block") {
            $(this).next().slideUp();
        } else {
            $(this).next().slideDown();
        }
    })
});

// section 3


let days, hours, minutes, seconds;
$(function () { 
    setInterval(function(){
        days = Number(document.getElementById("days").textContent);
        hours = Number(document.getElementById("hours").textContent);
        minutes = Number(document.getElementById("minutes").textContent);
        seconds = Number(document.getElementById("seconds").textContent);

        if(seconds>0) {
            seconds--;
        } else if(seconds == 0) {
            seconds = 59;  
            if(minutes> 0)
                minutes --;
            else
                {
                    minutes = 59
                    if(hours > 1) 
                        hours--;
                    else if(hours == 0)
                        {
                            days == 30
                            hours = 59
                        }
                }

        }
    
        document.getElementById("seconds").innerHTML = seconds;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("days").innerHTML = days;
    }, 1)
});
