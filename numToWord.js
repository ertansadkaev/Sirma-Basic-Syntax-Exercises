function numToWord (num) {
    const numbers = [0,1,2,3,4,5,6,7,8,9];
    const words = ["zero","one","two","three","four","five","six","seven","eight","nine"];

    for(let number of numbers){
        if (num === number){
            console.log(words[num]);
        } 
    }
    if (num > 9) {
        console.log("too big");
    }
} 
numToWord(7);
numToWord(5);
numToWord(10);