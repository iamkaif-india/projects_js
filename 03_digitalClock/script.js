setInterval(function(){
    let today = new Date()
    let time = today.toLocaleTimeString();
    document.querySelector("#timeText").innerHTML = time;
}, 1000)