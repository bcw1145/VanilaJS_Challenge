
const clock=document.querySelector(".js-clock")
const h1=clock.querySelector("h1");
const h2=clock.querySelector("h2");

function getTime(){
    const date= new Date();
    const seconds=date.getSeconds(),
    minutes= date.getMinutes(),
    hours=date.getHours(),
    years=date.getFullYear(),
    months=date.getMonth()+1,
    dates=date.getDate();
    h1.innerText=`${years}.${months}.${dates} `;
    h2.innerText=`${hours<=12 ? `AM${hours<10 ? ` ${hours}`:`${hours}`}`:`PM${hours-12<10 ? ` ${hours-12}`:`${hours-12}`}`}:${
        minutes<10 ? `0${minutes}`:`${minutes}`}:${
        seconds <10 ? `0${seconds}`:`${seconds}`}`;
}

function init(){
    getTime();
    setInterval(getTime,1000);
}
init();