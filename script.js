const startTime = () =>{
    let d = new Date();

    let day = d.getDay();
    document.getElementById('day').innerHTML = day;

    let h = d.getHours();
    document.getElementById('hour').innerHTML = h;

    let m = d.getMinutes();
    document.getElementById('min').innerHTML = m;

    let s = d.getSeconds();
    document.getElementById('sec').innerHTML = s;
    
    setTimeout(startTime , 1000);
}

startTime()




