const daysEl= document.getElementById('days');
const hoursEl=document.getElementById('hours');
const minutesEl=document.getElementById('minutes');
const secondsEl=document.getElementById('seconds');

const newYears='1 Jan 2021';

function countdown(){
    const currentDate=new Date();
    const newYearsDate=new Date(newYears);
    const totalSeconds=Math.floor((newYearsDate-currentDate)/1000);
    const sec=totalSeconds%60;
    const minutes=Math.floor(totalSeconds/60)%60;
    const hours=Math.floor(totalSeconds/60/60)%24;
    const days=Math.floor(totalSeconds/3600/24);

    daysEl.textContent=formatTime(days);
    hoursEl.textContent=formatTime(hours);
    minutesEl.textContent=formatTime(minutes);
    secondsEl.textContent=formatTime(sec);
}

//To show the 0 in front if sec/min/hrs/days<0 
function formatTime(time){
     return time<10?(`0${time}`):time;
}

countdown();
setInterval(countdown,1000);
