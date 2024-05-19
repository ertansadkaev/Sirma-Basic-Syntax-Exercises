function alarm (hour, minute){

let hours = hour;
let minutes = minute + 15;

if (minutes >= 60) {
    hours += 1;
    minutes = minutes - 60;
}
if (hours === 24){
    hours = 0;
}

const formattedMinute = minutes < 10 ? `0${minutes}` : minutes;

console.log(`${hours}:${formattedMinute}`);
}

alarm(1, 47); 
alarm(0, 2); 
alarm(23, 59); 
alarm(11, 07); 
